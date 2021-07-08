import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import { createMessage, getMessages } from '../api/message'

type messageValues = {
  text: string
  email: string
}

export const create = createAsyncThunk(
  'message/create',
  async (values: messageValues, { rejectWithValue }) => {
    type createMessageResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<createMessageResponse> =
        await createMessage(values)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const messages = createAsyncThunk(
  'message/messages',
  async (page: number, { rejectWithValue }) => {
    type Message = {
      email: string
      text: string
      createdAt: string
      updatedAt: string
    }
    type getMessagesResponse = {
      messages: Message[]
      pages: number
    }

    try {
      const response: AxiosResponse<getMessagesResponse> = await getMessages(
        page
      )

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
