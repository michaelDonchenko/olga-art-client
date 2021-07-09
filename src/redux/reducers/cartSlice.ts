import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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

interface InitialStateI {
  products: Product[] | null
  delivery: string
  paymentMethod: string
}

let cartFromLocalstorage = localStorage.getItem('cart')

const initialState: InitialStateI = {
  products:
    cartFromLocalstorage !== null ? JSON.parse(cartFromLocalstorage) : null,
  delivery: '',
  paymentMethod: '',
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
  },
  extraReducers: (builder) => {
    //comment
  },
})

export const { setCart, setDelivey, setPaymentMethod } = cartSlice.actions

export default cartSlice.reducer
