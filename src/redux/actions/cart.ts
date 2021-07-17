import { createAsyncThunk } from '@reduxjs/toolkit'
import { cartObj, getCartFromDb, saveCartToDB } from '../api/cart'
import { AxiosResponse } from 'axios'
import { CartFromDb } from '../reducers/cartSlice'

export const saveCart = createAsyncThunk(
  'auth/saveCart',
  async (obj: cartObj, { rejectWithValue }) => {
    type registerResponse = {
      message: string
      cartId: string
    }

    try {
      const response: AxiosResponse<registerResponse> = await saveCartToDB(obj)
      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const getCart = createAsyncThunk(
  'auth/getCart',
  async (id: string, { rejectWithValue }) => {
    type registerResponse = {
      cart: CartFromDb
      message: string
    }

    try {
      const response: AxiosResponse<registerResponse> = await getCartFromDb(id)
      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
