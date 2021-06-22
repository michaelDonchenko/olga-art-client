import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'
import { register } from '../actions/auth'

const cookies = new Cookies()

interface initialStateI {
  user: null | object
  loading: boolean
  successMessage: boolean | string
  errorMessage: boolean
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
  reducers: {},
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
  },
})

export const {} = authSlice.actions
export default authSlice.reducer
