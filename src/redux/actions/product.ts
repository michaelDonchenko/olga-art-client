import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import {
  addProductToWishlist,
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  getRandomProducts,
  QueryObj,
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
  async (
    { page, queryObj }: { page: number; queryObj: QueryObj },
    { rejectWithValue }
  ) => {
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
      pages: number
      page: number
    }

    try {
      const response: AxiosResponse<getProductsResponse> = await getProducts(
        page,
        queryObj
      )

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const product = createAsyncThunk(
  'product/product',
  async (id: string, { rejectWithValue }) => {
    type SingleProductImage = {
      original: string
      thumbnail: string
    }

    type category = {
      _id: string
      name: string
    }

    type product = {
      _id: string
      name: string
      price: number
      quantity: number
      category: category
      description: string
      images?: any[]
      sold: number
      createdAt: string
      updatedAt: string
      wishlist: string[]
    }
    type getProductsResponse = {
      product: product
      images: SingleProductImage[]
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

export const randomProducts = createAsyncThunk(
  'product/randomProducts',
  async (_, { rejectWithValue }) => {
    type Image = {
      url: string
    }

    type products = {
      _id: string
      name: string
      price: number
      quantity: number
      category: string
      description: string
      images: Image[]
    }
    type getProductsResponse = {
      products: products[]
    }

    try {
      const response: AxiosResponse<getProductsResponse> =
        await getRandomProducts()

      type Item = { description: string; original: string; productId: string }
      type Items = Item[]
      let items: Items = []

      let products = response.data.products
      products.forEach((element) => {
        items.push({
          productId: element._id,
          description: element.name,
          original:
            element.images.length > 0
              ? element.images[0].url
              : 'https://via.placeholder.com/900x900?text=No+Images+Yet..',
        })
      })

      return items
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const addToWishlist = createAsyncThunk(
  'product/addToWishlist',
  async (productId: string, { rejectWithValue }) => {
    type addToWishlistResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<addToWishlistResponse> =
        await addProductToWishlist(productId)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
