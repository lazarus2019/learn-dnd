import axios from 'axios'
import {
  GITLAB_API_URL,
  GITLAB_CLIENT_ID,
  GITLAB_CLIENT_SECRET,
  GITLAB_REDIRECT_URI
} from './common'

export const gitlabRequestCodeParams = {
  client_id: GITLAB_CLIENT_ID,
  redirect_uri: GITLAB_REDIRECT_URI,
  response_type: 'code',
  scope: 'read_api+read_repository+write_repository+profile+api'
}

export const gitlabRequestAuthorizationParams = {
  client_id: GITLAB_CLIENT_ID,
  client_secret: GITLAB_CLIENT_SECRET,
  grant_type: 'authorization_code',
  redirect_uri: GITLAB_REDIRECT_URI
  //   code: 'CODE_VERIFIER',
}

export type AuthorizationResponse = {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  created_at: number
}

const axiosInstance = axios.create({
  baseURL: GITLAB_API_URL,
  signal: new AbortController().signal
})

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    console.error('Axios error--', error)
    return Promise.reject(error)
  }
)

export default axiosInstance
