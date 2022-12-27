import { createContext, useEffect, useMemo, useReducer } from "react";
import PropTypes from "prop-types";
// utils
// import axios from "../utils/axios";
import axios from "axios";
// import { isValidToken, setSession, jwtDecode } from "../utils/jwt";
import { signIn, signOut } from "next-auth/react"
// ----------------------------------------------------------------------
import { getSession } from "next-auth/react";

const initialState = {
  isAuthenticated: false,
  isInitialized: true,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null,
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const jwtDecode = (token) => {
  let jwt = {}
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  try {
    jwt = JSON.parse(jsonPayload)
  }
  catch (e) {
    console.log('[jwtDecode]', e);
  }

  console.log('[jwtDecode]jwt decoded: ', JSON.stringify(jwt));

  return jwt
}
const handleTokenExpired = (exp) => {
  console.log('[handleTokenExpired]now: ', Date.now());
  console.log('[handleTokenExpired]exp timestamp: ', exp * 1000);
  console.log('[handleTokenExpired]exp date: ', new Date(exp * 1000));
  if (Date.now() < exp * 1000) {
    return false
  }
  console.log('[handleTokenExpired]Expired');
  setSession(null)
  return true
}

const setSession = (jwt) => {
  if (jwt) {
    localStorage.setItem("jwt", jwt);
    axios.defaults.headers.common.Authorization = `Bearer ${jwt}`;
    // This function below will handle when token is expired
    const { exp } = jwtDecode(jwt);
    const check = handleTokenExpired(exp);
    console.log('[=========>]exp: ', check);
  } else {
    localStorage.removeItem("jwt");
    delete axios.defaults.headers.common.Authorization;
  }
};

const AuthContext = createContext({
  ...initialState,
  method: "jwt",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = async () => {
    try {
      const session = await getSession()

      // const jwt = window.localStorage.getItem("jwt");
      const jwt = session?.accessToken

      if (jwt) {
        setSession(jwt);

        // const response = await axios.get("/api/account/my-account");
        // const { user } = response.data;
        const jwtDecoded = jwtDecode(jwt)
        const user = { name: jwtDecoded?.sub, role: jwtDecoded?.role };

        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: true,
            user,
          },
        });
      } else {
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (err) {
      console.error(err);
      dispatch({
        type: "INITIALIZE",
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  const login = async (username, password) => {
    signIn('credentials', { redirect:  true, callbackUrl: '/', username: username, password: password })
      .then((result) => {
        if (result?.ok) {
          dispatch({
            type: "LOGIN",
            payload: {
              user: { id: 1, name: "김도현" }
            },
          });
          setSession(JSON.stringify(result.jwt))
        }
      })
  };

  const register = async (email, password, firstName, lastName) => {
    const response = await axios.post("/api/account/register", {
      email,
      password,
      firstName,
      lastName,
    });
    const { accessToken, user } = response.data;

    window.localStorage.setItem("accessToken", accessToken);
    dispatch({
      type: "REGISTER",
      payload: {
        user,
      },
    });
  };

  const logout = async () => {
    signOut({redirect: true, callbackUrl: "/"})
    setSession(null);
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        logout,
        register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
