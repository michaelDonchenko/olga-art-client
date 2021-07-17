import axios from 'axios'
axios.defaults.withCredentials = true
const server_url = process.env.REACT_APP_SERVER_URL

export const createOrder = async () =>
  await axios.post(`${server_url}/order/create-order`)

export const getOrder = async (id: string) =>
  await axios.get(`${server_url}/order/get-order/${id}`)

export const getOrders = async (page: number) =>
  await axios.get(`${server_url}/order/get-orders?page=${page}`)

export const getUserOrders = async (page: number) =>
  await axios.get(`${server_url}/order/get-user-orders?page=${page}`)
