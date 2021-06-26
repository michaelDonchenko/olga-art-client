import axios from 'axios'
axios.defaults.withCredentials = true
const server_url = process.env.REACT_APP_SERVER_URL

export type productImageObj = {
  id: string
  array: string[]
}

export type deleteProductImageObject = {
  productId: string
  public_id: string
}

export const uploadProductImage = async (obj: productImageObj) =>
  await axios.post(`${server_url}/cloudinary/product/upload-image`, obj)

export const deleteProductImage = async (obj: deleteProductImageObject) =>
  await axios.delete(`${server_url}/cloudinary/product/delete-image`, {
    data: obj,
  })
