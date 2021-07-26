import axios from 'axios'
import { UserInfo } from '../reducers/authSlice'
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

export type passwordResetObj = {
  password: string
  confirmPassword: string
  resetPasswordToken: string
}

export const registerUser = async (obj: registerObj) =>
  await axios.post(`${server_url}/auth/register`, obj)

export const loginUser = async (obj: loginObj) =>
  await axios.post(`${server_url}/auth/login`, obj)

export const forgotPasswordEmail = async (email: string) =>
  await axios.post(`${server_url}/auth/forgot-password`, { email })

export const logoutUser = async () =>
  await axios.get(`${server_url}/auth/logout`)

export const getUsers = async (page: number) =>
  await axios.get(`${server_url}/auth/users?page=${page}`)

export const updateUserDetails = async (userInfo: UserInfo) =>
  await axios.post(`${server_url}/auth/update-details`, { userInfo })

export const resetPasswordValidation = async (id: string) =>
  await axios.get(`${server_url}/auth/password-reset-validation/${id}`)

export const resetPasswordAction = async (obj: passwordResetObj) =>
  await axios.post(`${server_url}/auth/password-reset`, obj)

export const getPaypalClientId = async () =>
  await axios.get(`${server_url}/auth/get-paypal-client-id`)
