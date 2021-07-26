import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  registerUser,
  registerObj,
  loginObj,
  loginUser,
  logoutUser,
  getUsers,
  updateUserDetails,
  forgotPasswordEmail,
  resetPasswordValidation,
  passwordResetObj,
  resetPasswordAction,
  verifyAccount,
} from '../api/auth'
import { AxiosResponse } from 'axios'
import { UserI, UserInfo } from '../reducers/authSlice'

export const login = createAsyncThunk(
  'auth/login',
  async (obj: loginObj, { rejectWithValue }) => {
    type loginResponse = {
      message: string
      user: UserI
    }

    try {
      const response: AxiosResponse<loginResponse> = await loginUser(obj)

      // cookie.set('user', response.data.user)
      window.localStorage.setItem('user', JSON.stringify(response.data.user))

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

      window.localStorage.removeItem('user')

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const users = createAsyncThunk(
  'auth/users',
  async (page: number, { rejectWithValue }) => {
    type User = {
      email: string
      verified: boolean
      role: string
      createdAt: string
    }

    type usersResponse = {
      users: User[]
      pages: number
    }

    try {
      const response: AxiosResponse<usersResponse> = await getUsers(page)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const updateDetails = createAsyncThunk(
  'auth/updateDetails',
  async (userInfo: UserInfo, { rejectWithValue }) => {
    type updateDetailResponse = {
      message: string
      user: UserI
    }

    try {
      const response: AxiosResponse<updateDetailResponse> =
        await updateUserDetails(userInfo)

      window.localStorage.setItem('user', JSON.stringify(response.data.user))

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const forgotPassowrd = createAsyncThunk(
  'auth/forgotPassowrd',
  async (email: string, { rejectWithValue }) => {
    type forgotPassowrdResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<forgotPassowrdResponse> =
        await forgotPasswordEmail(email)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const passwordValidation = createAsyncThunk(
  'auth/passwordValidation',
  async (id: string, { rejectWithValue }) => {
    type passwordValidationResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<passwordValidationResponse> =
        await resetPasswordValidation(id)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const passwordAction = createAsyncThunk(
  'auth/passwordAction',
  async (obj: passwordResetObj, { rejectWithValue }) => {
    type passwordActionResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<passwordActionResponse> =
        await resetPasswordAction(obj)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const verify = createAsyncThunk(
  'auth/verify',
  async (verificationCode: string, { rejectWithValue }) => {
    type verificationResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<verificationResponse> = await verifyAccount(
        verificationCode
      )

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
