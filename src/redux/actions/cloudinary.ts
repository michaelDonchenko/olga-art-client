import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import {
  deleteProductImage,
  deleteProductImageObject,
  uploadProductImage,
} from '../api/cloudinary'
import { productImageObj } from '../api/cloudinary'
import { Product } from '../reducers/productSlice'

export const productImageUpload = createAsyncThunk(
  'cloudinary/productImageUpload',
  async (obj: productImageObj, { rejectWithValue }) => {
    type uploadProductImageResponse = {
      message: string
      product: Product
    }

    try {
      const response: AxiosResponse<uploadProductImageResponse> =
        await uploadProductImage(obj)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const productImageDelete = createAsyncThunk(
  'cloudinary/productImageDelete',
  async (obj: deleteProductImageObject, { rejectWithValue }) => {
    type uploadProductImageResponse = {
      message: string
      product: Product
    }

    try {
      const response: AxiosResponse<uploadProductImageResponse> =
        await deleteProductImage(obj)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
