import axios from 'axios'
axios.defaults.withCredentials = true
const server_url = process.env.REACT_APP_SERVER_URL

export type updateObj = {
  id: string | undefined
  name: string | undefined
}

export const createCategory = async (category: string) =>
  await axios.post(`${server_url}/category/create`, { name: category })

export const getCategories = async () =>
  await axios.get(`${server_url}/category/categories`)

export const deleteCategory = async (id: string) =>
  await axios.delete(`${server_url}/category/delete/${id}`)

export const updateCategory = async (obj: updateObj) =>
  await axios.put(`${server_url}/category/update/${obj.id}`, { name: obj.name })
