import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { productImageDelete, productImageUpload } from '../actions/cloudinary'
import {
  addToWishlist,
  adminProducts,
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
  name: string
}

type RandomProduct = {
  productId: string
  original: string
  description: string
}

type SingleProductImage = {
  original: string
  thumbnail: string
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
  count?: number
  wishlist: string[]
}

interface initialStateI {
  product: undefined | Product
  productImages: SingleProductImage[]
  products: any[]
  adminProducts: any[]
  pages: number
  page: number
  queryObj: {
    sort: string
    category: string
    productsToDisplay: string
  }
  randomProducts: RandomProduct[] | []
  productToUpdate: {} | Product
  createdProductId: null | string
  successMessage: boolean | string
  errorMessage: boolean | string
  loading: boolean
  addToWishlistSuccess: boolean | string
  addToWishlistError: boolean | string
  wishlistLoading: boolean
}

const initialState: initialStateI = {
  product: undefined,
  productImages: [],
  products: [],
  adminProducts: [],
  pages: 0,
  page: 1,
  queryObj: {
    sort: 'createdAt',
    category: '',
    productsToDisplay: 'all',
  },
  randomProducts: [],
  productToUpdate: {},
  createdProductId: null,
  successMessage: false,
  errorMessage: false,
  loading: false,
  addToWishlistSuccess: false,
  addToWishlistError: false,
  wishlistLoading: false,
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
    setPage: (state, action) => {
      state.page = action.payload
    },
    setCategory: (state, action) => {
      state.queryObj.category = action.payload
      state.page = 1
    },
    setSort: (state, action) => {
      state.queryObj.sort = action.payload
      state.page = 1
    },
    setProductToDisplay: (state, action) => {
      state.queryObj.productsToDisplay = action.payload
      state.page = 1
    },
    resetQueryObj: (state) => {
      state.queryObj = {
        sort: 'createdAt',
        category: '',
        productsToDisplay: 'all',
      }
    },
    resetCreatedProductId: (state) => {
      state.createdProductId = null
    },
    resetAddToWishlistSuccess: (state) => {
      state.addToWishlistSuccess = false
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
        state.pages = action.payload.data.pages
        state.page = action.payload.data.page
        state.errorMessage = false
      })
      .addCase(products.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //get admin products
      .addCase(adminProducts.pending, (state, action) => {
        state.loading = true
      })
      .addCase(adminProducts.fulfilled, (state, action) => {
        state.loading = false
        state.adminProducts = action.payload.data.products
        state.pages = action.payload.data.pages
        state.page = action.payload.data.page
        state.errorMessage = false
      })
      .addCase(adminProducts.rejected, (state, action: PayloadAction<any>) => {
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
        state.productImages = action.payload.data.images
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
      //add product to wishlist
      .addCase(addToWishlist.pending, (state, action) => {
        state.wishlistLoading = true
      })
      .addCase(addToWishlist.fulfilled, (state, action) => {
        state.wishlistLoading = false
        state.addToWishlistSuccess = action.payload.data.message
        state.errorMessage = false
      })
      .addCase(addToWishlist.rejected, (state, action: PayloadAction<any>) => {
        state.wishlistLoading = false
        state.addToWishlistError = action.payload.message
      })
  },
})

export const {
  resetSuccessMessage,
  setErrorMessage,
  setProductToUpdate,
  setPage,
  setCategory,
  resetQueryObj,
  setSort,
  setProductToDisplay,
  resetCreatedProductId,
  resetAddToWishlistSuccess,
} = productSlice.actions

export default productSlice.reducer
