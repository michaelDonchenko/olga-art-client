import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  registerUser,
  registerObj,
  loginObj,
  loginUser,
  logoutUser,
} from '../api/auth'
import { AxiosResponse } from 'axios'
import Cookies from 'universal-cookie'
import { UserI } from '../reducers/authSlice'

const cookie = new Cookies()

export const login = createAsyncThunk(
  'auth/login',
  async (obj: loginObj, { rejectWithValue }) => {
    type loginResponse = {
      message: string
      user: UserI
    }

    try {
      const response: AxiosResponse<loginResponse> = await loginUser(obj)
      if (response) {
        cookie.set('user', response.data.user)
      }

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

export const logout = createAsyncThunk(
  'auth/logout',
  async (obj, { rejectWithValue }) => {
    type logoutResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<logoutResponse> = await logoutUser()
      if (response) {
        cookie.remove('user')
      }
      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
