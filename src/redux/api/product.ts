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

export type QueryObj = {
  sort?: string
  category?: string
  productsToDisplay?: string
}

export const createProduct = async (values: productValues) =>
  await axios.post(`${server_url}/product/create`, values)

export const getProducts = async (page: number, quertyObj: QueryObj) =>
  await axios.get(
    `${server_url}/product/products?page=${page}&sort=${quertyObj.sort}&category=${quertyObj.category}&products=${quertyObj.productsToDisplay}`
  )

export const getAdminProducts = async (page: number) =>
  await axios.get(`${server_url}/product/admin-products?page=${page}`)

export const getRandomProducts = async () =>
  await axios.get(`${server_url}/product/get-random-products`)

export const getProduct = async (id: string) =>
  await axios.get(`${server_url}/product/product/${id}`)

export const updateProduct = async (values: productValues, id: string) =>
  await axios.put(`${server_url}/product/update/${id}`, values)

export const deleteProduct = async (id: string) =>
  await axios.delete(`${server_url}/product/delete/${id}`)

export const addProductToWishlist = async (productId: string) =>
  await axios.post(`${server_url}/product/add-to-wishlist`, { productId })

export const getMostWishedProducts = async () =>
  await axios.get(`${server_url}/product/most-wished`)
