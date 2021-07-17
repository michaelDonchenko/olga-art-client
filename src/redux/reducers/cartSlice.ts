import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getCart, saveCart } from '../actions/cart'

type Image = {
  url: string
  public_id: string
}

type Category = {
  _id: string
  name: string
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
  count: number
}

export type ProductFromDb = {
  product: Product
  price: number
  count: number
}

export type Cart = {
  products: Product[]
  deliveryOption: string
  paymentMethod: string
  cartTotal: number
  orderedBy: string
}

export type CartFromDb = {
  products: ProductFromDb[]
  deliveryOption: string
  paymentMethod: string
  cartTotal: number
  orderedBy: string
}

interface InitialStateI {
  products: Product[] | null
  delivery: string
  paymentMethod: string
  loading: boolean
  successMessage: boolean | string
  errorMessage: boolean | string
  cartFromDb: CartFromDb | undefined
  cartId: string
}

let cartFromLocalstorage = localStorage.getItem('cart')

const initialState: InitialStateI = {
  products:
    cartFromLocalstorage !== null ? JSON.parse(cartFromLocalstorage) : null,
  delivery: '',
  paymentMethod: '',
  loading: false,
  successMessage: false,
  errorMessage: false,
  cartFromDb: undefined,
  cartId: '',
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.products = action.payload
    },
    setDelivey: (state, action) => {
      state.delivery = action.payload
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload
    },
    clearSuccess: (state) => {
      state.successMessage = false
    },
    resetCart: (state) => {
      state.products = null
      state.cartFromDb = undefined
    },
  },
  extraReducers: (builder) => {
    builder
      //save cart to db
      .addCase(saveCart.pending, (state, action) => {
        state.loading = true
      })
      .addCase(saveCart.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = action.payload.data.message
        state.cartId = action.payload.data.cartId
        state.errorMessage = false
      })
      .addCase(saveCart.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      // get cart from backend
      .addCase(getCart.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false
        state.cartFromDb = action.payload.data.cart
        state.successMessage = action.payload.data.message
        state.errorMessage = false
      })
      .addCase(getCart.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
  },
})

export const {
  setCart,
  setDelivey,
  setPaymentMethod,
  clearSuccess,
  resetCart,
} = cartSlice.actions

export default cartSlice.reducer
