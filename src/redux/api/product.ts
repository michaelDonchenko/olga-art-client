import axios from 'axios'
axios.defaults.withCredentials = true
const server_url = process.env.REACT_APP_SERVER_URL

export type productValues = {
  name: string
  price: number
  quantity: number
  description: string
  category: string | unknown
}

export const createProduct = async (values: productValues) =>
  await axios.post(`${server_url}/product/create`, values)

export const getProducts = async () =>
  await axios.get(`${server_url}/product/products`)

export const getProduct = async (id: string) =>
  await axios.get(`${server_url}/product/product/${id}`)

export const updateProduct = async (values: productValues, id: string) =>
  await axios.put(`${server_url}/product/update/${id}`, values)

export const deleteProduct = async (id: string) =>
  await axios.delete(`${server_url}/product/delete/${id}`)
