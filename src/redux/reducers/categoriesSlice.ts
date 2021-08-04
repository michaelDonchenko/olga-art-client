import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  categories,
  create,
  putCategory,
  removeCategory,
} from '../actions/categories'

type category = {
  _id: string
  name: string
  createdAt: string
  updatedAt: string
}

interface initialStateI {
  categories: category[]
  errorMessage: string | boolean
  successMessage: boolean
  loading: boolean
  categoryToUpdate: null | category
}

const initialState: initialStateI = {
  categories: [],
  errorMessage: false,
  successMessage: false,
  loading: false,
  categoryToUpdate: null,
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    resetSuccessMessage: (state) => {
      state.successMessage = false
    },
    resetErrorMessage: (state) => {
      state.errorMessage = false
    },
    placeCategoryToUpdate: (state, action) => {
      state.categoryToUpdate = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      //create category
      .addCase(create.pending, (state, action) => {
        state.loading = true
      })
      .addCase(create.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = true
        state.errorMessage = false
      })
      .addCase(create.rejected, (state, action: PayloadAction<any>) => {
        if (action.payload === 'Unauthorized') {
          state.loading = false
          state.errorMessage = action.payload
        } else {
          state.loading = false
          action.payload.errors
            ? (state.errorMessage = action.payload.errors[0].msg)
            : (state.errorMessage = action.payload.message)
        }
      })
      //get categories
      .addCase(categories.pending, (state, action) => {
        state.loading = true
      })
      .addCase(categories.fulfilled, (state, action) => {
        state.loading = false
        state.categories = action.payload.data.categories
        state.errorMessage = false
      })
      .addCase(categories.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //remove categories
      .addCase(removeCategory.pending, (state, action) => {
        state.loading = true
      })
      .addCase(removeCategory.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = true
        state.errorMessage = false
      })
      .addCase(removeCategory.rejected, (state, action: PayloadAction<any>) => {
        if (action.payload === 'Unauthorized') {
          state.loading = false
          state.errorMessage = action.payload
        } else {
          state.loading = false
          action.payload.errors
            ? (state.errorMessage = action.payload.errors[0].msg)
            : (state.errorMessage = action.payload.message)
        }
      })
      //update category
      .addCase(putCategory.pending, (state, action) => {
        state.loading = true
      })
      .addCase(putCategory.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = true
        state.errorMessage = false
      })
      .addCase(putCategory.rejected, (state, action: PayloadAction<any>) => {
        if (action.payload === 'Unauthorized') {
          state.loading = false
          state.errorMessage = action.payload
        } else {
          state.loading = false
          action.payload.errors
            ? (state.errorMessage = action.payload.errors[0].msg)
            : (state.errorMessage = action.payload.message)
        }
      })
  },
})

export const { resetSuccessMessage, placeCategoryToUpdate, resetErrorMessage } =
  categorySlice.actions

export default categorySlice.reducer
