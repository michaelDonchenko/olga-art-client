import { createAsyncThunk } from '@reduxjs/toolkit'
import { registerUser, registerObj, loginObj, loginUser } from '../api/auth'
import { AxiosResponse } from 'axios'

export const login = createAsyncThunk(
  'auth/login',
  async (obj: loginObj, { rejectWithValue }) => {
    try {
      const response = await loginUser(obj)
      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const register = createAsyncThunk(
  'auth/register',
  async (obj: registerObj, { rejectWithValue }) => {
    type registerResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<registerResponse> = await registerUser(obj)
      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
