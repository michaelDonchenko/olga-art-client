import axios from 'axios'
axios.defaults.withCredentials = true
const server_url = process.env.REACT_APP_SERVER_URL

export type cartObj = {
  products: any[]
  delivery: string
  paymentMethod: string
}

export const saveCartToDB = async (cart: cartObj) =>
  await axios.post(`${server_url}/cart/save-cart`, { cart })

export const getCartFromDb = async (id: string) =>
  await axios.get(`${server_url}/cart/get-cart/${id}`)
