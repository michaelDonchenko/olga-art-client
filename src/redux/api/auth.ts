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
}

export const registerUser = async (obj: registerObj) =>
  await axios.post(`${server_url}/auth/register`, obj)

export const loginUser = async (obj: loginObj) =>
  await axios.post(`${server_url}/auth/login`, obj)

export const logoutUser = async () =>
  await axios.get(`${server_url}/auth/logout`)

export const getUsers = async (page: number) =>
  await axios.get(`${server_url}/auth/users?page=${page}`)
