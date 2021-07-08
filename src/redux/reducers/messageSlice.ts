import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { create, messages } from '../actions/message'

type Message = {
  email: string
  text: string
  createdAt: string
  updatedAt: string
}

interface initialStateI {
  loading: boolean
  errorMessage: boolean | string
  successMessage: boolean | string
  messages: null | Message[]
  pages: number
  page: number
  clearValues: boolean
}

const initialState: initialStateI = {
  loading: false,
  errorMessage: false,
  successMessage: false,
  messages: null,
  pages: 0,
  page: 1,
  clearValues: false,
}

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    resetSuccessMessage: (state) => {
      state.successMessage = false
    },
    resetErrorMessage: (state) => {
      state.errorMessage = false
    },
    resetClearValues: (state) => {
      state.clearValues = false
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      //create message
      .addCase(create.pending, (state, action) => {
        state.loading = true
      })
      .addCase(create.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = action.payload.data.message
        state.clearValues = true
        state.errorMessage = false
      })
      .addCase(create.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //get messages
      .addCase(messages.pending, (state, action) => {
        state.loading = true
      })
      .addCase(messages.fulfilled, (state, action) => {
        state.loading = false
        state.messages = action.payload.data.messages
        state.pages = action.payload.data.pages
        state.errorMessage = false
      })
      .addCase(messages.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
  },
})

export const {
  resetClearValues,
  resetSuccessMessage,
  resetErrorMessage,
  setPage,
} = messageSlice.actions

export default messageSlice.reducer
