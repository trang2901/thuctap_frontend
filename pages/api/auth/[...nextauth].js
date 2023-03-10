import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

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

const options = {
  pages: {
    signIn: '/auth/login',
    signOut: '/auth/logout',
    error: '/auth/error', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        const res = await fetch(publicRuntimeConfig.baseApiUrl + "/auth/token", {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" }
        })
        let u = await res.json();
        console.log('========== ???? ????ng nh???p:', u);

        const jwtDecoded = jwtDecode(u.data.access_token)

        const user = {
          name: "your",
          sub: jwtDecoded.sub,
          email: "your@gmail.com",
          image: "",
          access_token: u.data.access_token
        }

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user
        }
        // Return null if user data could not be retrieved
        return null
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token to the token right after signin
      if (user) {
        token.accessToken = user.access_token
      }

      console.log("token ???? ???????c ????ng nh???p", token);
      console.log("account ???? ???????c ????ng nh???p", user);
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      console.log("Session ???? ???????c ????ng nh???p", session);
      /*
      Session ???? ???????c ????ng nh???p {
        user: {
          name: 'D????ng Nguy???n Ph?? C?????ng',
          email: 'kellyfire611@gmail.com',
          image: 'https://lh3.googleusercontent.com/a/AATXAJxY81JewLxPZP1xR5AddrMb_huXfceojPDtM_xT=s96-c'
        },
        expires: '2022-04-01T00:21:26.880Z'
      }
      */
      session.accessToken = token.accessToken
      // session.id = user.id;

      console.log("User ???? ???????c l??u trong database", user);
      /*
      User ???? ???????c l??u trong database {
        id: '621edf6763c30b1cddc00786',
        name: 'D????ng Nguy???n Ph?? C?????ng',
        email: 'kellyfire611@gmail.com',
        image: 'https://lh3.googleusercontent.com/a/AATXAJxY81JewLxPZP1xR5AddrMb_huXfceojPDtM_xT=s96-c',
        emailVerified: null
      }
      */

      console.log("Token nh???n ???????c", token);

      session.userInDatabase = user;
      return session
    }
  },
}

export default NextAuth(options);
