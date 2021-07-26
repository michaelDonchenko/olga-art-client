import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  forgotPassowrd,
  login,
  logout,
  passwordAction,
  passwordValidation,
  register,
  updateDetails,
  users,
  verify,
} from '../actions/auth'

type User = {
  email: string
  verified: boolean
  role: string
  createdAt: string
}

export type UserInfo = {
  email: string
  name: string
  phone: string
  country: string
  city: string
  street: string
  zipCode: string
  homeNumber: string
  apartment: string
}

export interface UserI {
  role: 'admin' | 'subscriber'
  verified: boolean
  _id: string
  email: string
  createdAt: string
  updatedAt: string
  userInfo?: UserInfo
}

interface initialStateI {
  user?: UserI
  loading: boolean
  successMessage: boolean | string
  errorMessage: boolean | string
  page: number
  pages: number
  users: null | User[]
  passwordValidatorError: boolean | string
  passwordValidatorSuccess: boolean | string
  resetPasswordError: boolean | string
  resetPasswordSuccess: boolean | string
  verificationError: boolean | string
  verificationSuccess: boolean | string
}

const initialState: initialStateI = {
  user: window.localStorage.getItem('user')
    ? JSON.parse(window.localStorage.getItem('user') as string)
    : undefined,
  loading: false,
  successMessage: false,
  errorMessage: false,
  page: 1,
  pages: 0,
  users: null,
  passwordValidatorError: false,
  passwordValidatorSuccess: false,
  resetPasswordError: false,
  resetPasswordSuccess: false,
  verificationError: false,
  verificationSuccess: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetError: (state) => {
      state.errorMessage = false
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    successReset: (state) => {
      state.successMessage = false
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
        state.user = undefined
        state.errorMessage = false
      })
      .addCase(logout.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //get users
      .addCase(users.pending, (state, action) => {
        state.loading = true
      })
      .addCase(users.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload.data.users
        state.pages = action.payload.data.pages
        state.errorMessage = false
      })
      .addCase(users.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //update details
      .addCase(updateDetails.pending, (state, action) => {
        state.loading = true
      })
      .addCase(updateDetails.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = action.payload.data.message
        state.user = action.payload.data.user
        state.errorMessage = false
      })
      .addCase(updateDetails.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //update details
      .addCase(forgotPassowrd.pending, (state, action) => {
        state.loading = true
      })
      .addCase(forgotPassowrd.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = action.payload.data.message
        state.errorMessage = false
      })
      .addCase(forgotPassowrd.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //reset password validation
      .addCase(passwordValidation.pending, (state, action) => {
        state.loading = true
      })
      .addCase(passwordValidation.fulfilled, (state, action) => {
        state.loading = false
        state.passwordValidatorSuccess = action.payload.data.message
        state.passwordValidatorError = false
      })
      .addCase(
        passwordValidation.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false
          action.payload.errors
            ? (state.passwordValidatorError = action.payload.errors[0].msg)
            : (state.passwordValidatorError = action.payload.message)
        }
      )
      //reset password action
      .addCase(passwordAction.pending, (state, action) => {
        state.loading = true
      })
      .addCase(passwordAction.fulfilled, (state, action) => {
        state.loading = false
        state.resetPasswordSuccess = action.payload.data.message
        state.resetPasswordError = false
      })
      .addCase(passwordAction.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.resetPasswordError = action.payload.errors[0].msg)
          : (state.resetPasswordError = action.payload.message)
      })
      //verify account
      .addCase(verify.pending, (state, action) => {
        state.loading = true
      })
      .addCase(verify.fulfilled, (state, action) => {
        state.loading = false
        state.verificationSuccess = action.payload.data.message
        state.verificationError = false
      })
      .addCase(verify.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.verificationError = action.payload.errors[0].msg)
          : (state.verificationError = action.payload.message)
      })
  },
})

export const { resetError, setPage, successReset } = authSlice.actions
export default authSlice.reducer
