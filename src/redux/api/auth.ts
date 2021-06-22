import axios from 'axios'
axios.defaults.withCredentials = true
const server_url = process.env.REACT_APP_SERVER_URL

export type registerObj = {
  email: string
  password: string
  confirmPassword: string
}

export type loginObj = {
  email: string
  password: string
  confirmPassword: string
}

export const registerUser = async (obj: registerObj) =>
  await axios.post(`${server_url}/auth/register`, obj)

export const loginUser = async (obj: loginObj) =>
  await axios.post(`${server_url}/auth/login`, obj)
