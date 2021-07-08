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
}

let cartFromLocalstorage = localStorage.getItem('cart')

const initialState: InitialStateI = {
  products:
    cartFromLocalstorage !== null ? JSON.parse(cartFromLocalstorage) : null,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart: (state, action) => {
      state.products = action.payload
    },
  },
  extraReducers: (builder) => {
    //comment
  },
})

export const { setCart } = cartSlice.actions

export default cartSlice.reducer
