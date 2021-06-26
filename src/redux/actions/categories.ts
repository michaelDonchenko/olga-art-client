import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
  updateObj,
} from '../api/categories'

type category = {
  _id: string
  name: string
  createdAt: string
  updatedAt: string
}

export const create = createAsyncThunk(
  'category/create',
  async (category: string, { rejectWithValue }) => {
    type createCategoryResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<createCategoryResponse> =
        await createCategory(category)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const categories = createAsyncThunk(
  'category/categories',
  async (_, { rejectWithValue }) => {
    type getCategoriesResponse = {
      categories: category[]
    }

    try {
      const response: AxiosResponse<getCategoriesResponse> =
        await getCategories()

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const removeCategory = createAsyncThunk(
  'category/removeCategory',
  async (id: string, { rejectWithValue }) => {
    type deleteCategoryResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<deleteCategoryResponse> =
        await deleteCategory(id)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const putCategory = createAsyncThunk(
  'category/putCategory',
  async (obj: updateObj, { rejectWithValue }) => {
    type updateCategoryResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<updateCategoryResponse> =
        await updateCategory(obj)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
