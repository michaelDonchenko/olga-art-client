import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { productImageDelete, productImageUpload } from '../actions/cloudinary'
import {
  create,
  product,
  products,
  randomProducts,
  remove,
  update,
} from '../actions/product'

type Image = {
  url: string
  public_id: string
}

type Category = {
  _id: string
}

type RandomProduct = {
  productId: string
  original: string
  description: string
}

export type Product = {
  _id: string
  name: string
  images?: Image[]
  price: number
  quantity: number
  sold: number
  description: string
  category: Category
  createdAt: string
  updatedAt: string
}

interface initialStateI {
  product: {} | Product
  products: any[]
  randomProducts: RandomProduct[] | []
  productToUpdate: {} | Product
  createdProductId: null | string
  successMessage: boolean | string
  errorMessage: boolean | string
  loading: boolean
}

const initialState: initialStateI = {
  product: {},
  products: [],
  randomProducts: [],
  productToUpdate: {},
  createdProductId: null,
  successMessage: false,
  errorMessage: false,
  loading: false,
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    resetSuccessMessage: (state) => {
      state.successMessage = false
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload.message
    },
    setProductToUpdate: (state, action) => {
      state.productToUpdate = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      //create product
      .addCase(create.pending, (state, action) => {
        state.loading = true
      })
      .addCase(create.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = action.payload.data.message
        state.createdProductId = action.payload.data.productId
        state.errorMessage = false
      })
      .addCase(create.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //get products
      .addCase(products.pending, (state, action) => {
        state.loading = true
      })
      .addCase(products.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload.data.products
        state.errorMessage = false
      })
      .addCase(products.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //get product
      .addCase(product.pending, (state, action) => {
        state.loading = true
      })
      .addCase(product.fulfilled, (state, action) => {
        state.loading = false
        state.product = action.payload.data.product
        state.errorMessage = false
      })
      .addCase(product.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //upload product images
      .addCase(productImageUpload.pending, (state, action) => {
        state.loading = true
      })
      .addCase(productImageUpload.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = action.payload.data.message
        state.product = action.payload.data.product
        state.errorMessage = false
      })
      .addCase(
        productImageUpload.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false
          action.payload.errors
            ? (state.errorMessage = action.payload.errors[0].msg)
            : (state.errorMessage = action.payload.message)
        }
      )
      //delete product image
      .addCase(productImageDelete.pending, (state, action) => {
        state.loading = true
      })
      .addCase(productImageDelete.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = action.payload.data.message
        state.product = action.payload.data.product
        state.errorMessage = false
      })
      .addCase(
        productImageDelete.rejected,
        (state, action: PayloadAction<any>) => {
          state.loading = false
          action.payload.errors
            ? (state.errorMessage = action.payload.errors[0].msg)
            : (state.errorMessage = action.payload.message)
        }
      )
      //update product details
      .addCase(update.pending, (state, action) => {
        state.loading = true
      })
      .addCase(update.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = action.payload.data.message
        state.errorMessage = false
      })
      .addCase(update.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //delete product
      .addCase(remove.pending, (state, action) => {
        state.loading = true
      })
      .addCase(remove.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = action.payload.data.message
        state.errorMessage = false
      })
      .addCase(remove.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //get random products
      .addCase(randomProducts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(randomProducts.fulfilled, (state, action) => {
        state.loading = false
        state.randomProducts = action.payload
        state.errorMessage = false
      })
      .addCase(randomProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
  },
})

export const { resetSuccessMessage, setErrorMessage, setProductToUpdate } =
  productSlice.actions

export default productSlice.reducer
