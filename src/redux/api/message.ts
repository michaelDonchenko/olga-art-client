import axios from 'axios'
axios.defaults.withCredentials = true
const server_url = process.env.REACT_APP_SERVER_URL

type messageValues = {
  text: string
  email: string
}

export const createMessage = async (values: messageValues) =>
  await axios.post(`${server_url}/message/create`, values)

export const getMessages = async (page: number) =>
  await axios.get(`${server_url}/message/get-messages?page=${page}`)
