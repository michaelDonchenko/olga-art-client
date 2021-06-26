import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'
import { login, logout, register } from '../actions/auth'

const cookies = new Cookies()

export interface UserI {
  role: 'admin' | 'subscriber'
  verified: boolean
  _id: string
  email: string
  createdAt: string
  updatedAt: string
}

interface initialStateI {
  user: null | UserI
  loading: boolean
  successMessage: boolean | string
  errorMessage: boolean | string
}

const initialState: initialStateI = {
  user: cookies.get('user') ? cookies.get('user') : null,
  loading: false,
  successMessage: false,
  errorMessage: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: (state) => {
      state.errorMessage = false
    },
  },
  extraReducers: (builder) => {
    builder
      //register
      .addCase(register.pending, (state, action) => {
        state.loading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = action.payload.data.message
        state.errorMessage = false
      })
      .addCase(register.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //login
      .addCase(login.pending, (state, action) => {
        state.loading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload.data.user
        state.errorMessage = false
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //logout
      .addCase(logout.pending, (state, action) => {
        state.loading = true
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loading = false
        state.user = null
        state.errorMessage = false
      })
      .addCase(logout.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
  },
})

export const { resetError } = authSlice.actions
export default authSlice.reducer
