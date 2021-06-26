import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '../api/product'
import { productValues } from '../api/product'

export const create = createAsyncThunk(
  'product/create',
  async (values: productValues, { rejectWithValue }) => {
    type createProductResponse = {
      message: string
      productId: string
    }

    try {
      const response: AxiosResponse<createProductResponse> =
        await createProduct(values)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const products = createAsyncThunk(
  'product/products',
  async (_, { rejectWithValue }) => {
    type products = {
      name: string
      price: number
      quantity: number
      category: string
      description: string
      images?: any[]
    }
    type getProductsResponse = {
      products: products[]
    }

    try {
      const response: AxiosResponse<getProductsResponse> = await getProducts()

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const product = createAsyncThunk(
  'product/product',
  async (id: string, { rejectWithValue }) => {
    type product = {
      _id: string
      name: string
      price: number
      quantity: number
      category: string
      description: string
      images?: any[]
    }
    type getProductsResponse = {
      product: product
    }

    try {
      const response: AxiosResponse<getProductsResponse> = await getProduct(id)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const update = createAsyncThunk(
  'product/update',
  async (
    { values, id }: { values: productValues; id: string },
    { rejectWithValue }
  ) => {
    type getUpdateProductResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<getUpdateProductResponse> =
        await updateProduct(values, id)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const remove = createAsyncThunk(
  'product/remove',
  async (id: string, { rejectWithValue }) => {
    type deleteProductResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<deleteProductResponse> =
        await deleteProduct(id)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
