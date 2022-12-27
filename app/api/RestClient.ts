import getConfig from 'next/config';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useSession, getSession } from "next-auth/react"
const { publicRuntimeConfig } = getConfig();
console.log('[HOST]', publicRuntimeConfig.baseApiUrl);

// Config axios
// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: publicRuntimeConfig.baseApiUrl
  // baseURL: env.API_HOST
});
instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.timeout = 12000;

async function getToken() {
  const token = await getSession()

  return token?.accessToken + ""
}

const getHttpHeaders = async (isAuthenticated = true) => {
  // Add your custom logic here, for example add a Token to the Headers
  if (isAuthenticated) {
    return {
      headers: {
        Authorization: "Bearer " + await getToken() ,
      },
    };
  }

  return {};
};

const get = async (path: string, params = {}): Promise<AxiosResponse> => instance.get(path, Object.assign(await getHttpHeaders(), params));

const del = async (path: string): Promise<AxiosResponse> => instance.delete(path, await getHttpHeaders());

const post = async (path: string, data: any): Promise<AxiosResponse> => instance.post(path, data, await getHttpHeaders());

const put = async (path: string, data: any): Promise<AxiosResponse> => instance.put(path, data, await getHttpHeaders());

const patch = async (path: string, data: any): Promise<AxiosResponse> => instance.post(path, data, await getHttpHeaders());

export default {
  get,
  del,
  post,
  put,
  patch,
};
