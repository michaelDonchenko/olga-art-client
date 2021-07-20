import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  create,
  order,
  orders,
  paypalPayment,
  updateOrder,
  userOrders,
} from '../actions/order'
import { UserInfo } from './authSlice'
import { ProductFromDb } from './cartSlice'

export type Order = {
  _id: string
  products: ProductFromDb[]
  deliveryOption: string
  paymentMethod: string
  cartTotal: number
  orderStatus: string
  isPaid: boolean
  userInfo: UserInfo
  trackNumber: string
  url: string
  orderdBy: string
  createdAt: string
}

interface initialStateI {
  loading: boolean
  error: boolean | string
  success: boolean | string
  createdOrderId?: string
  order?: Order
  page: number
  pages: number
  orders?: Order[]
}

const initialState: initialStateI = {
  loading: false,
  error: false,
  success: false,
  createdOrderId: undefined,
  order: undefined,
  page: 1,
  pages: 0,
  orders: undefined,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    clearState: (state) => {
      state.success = false
      state.createdOrderId = undefined
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    clearOrder: (state) => {
      state.success = false
      state.order = undefined
    },
  },
  extraReducers: (builder) => {
    builder
      // create order
      .addCase(create.pending, (state, action) => {
        state.loading = true
      })
      .addCase(create.fulfilled, (state, action) => {
        state.loading = false
        state.createdOrderId = action.payload.data.orderId
        state.success = action.payload.data.message
        state.error = false
      })
      .addCase(create.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : (state.error = action.payload.message)
      })
      // get order
      .addCase(order.pending, (state, action) => {
        state.loading = true
      })
      .addCase(order.fulfilled, (state, action) => {
        state.loading = false
        state.order = action.payload.data.order
        state.error = false
      })
      .addCase(order.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : (state.error = action.payload.message)
      })
      // get orders
      .addCase(orders.pending, (state, action) => {
        state.loading = true
      })
      .addCase(orders.fulfilled, (state, action) => {
        state.loading = false
        state.orders = action.payload.data.orders
        state.pages = action.payload.data.pages
        state.error = false
      })
      .addCase(orders.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : (state.error = action.payload.message)
      })
      // get user orders
      .addCase(userOrders.pending, (state, action) => {
        state.loading = true
      })
      .addCase(userOrders.fulfilled, (state, action) => {
        state.loading = false
        state.orders = action.payload.data.orders
        state.pages = action.payload.data.pages
        state.error = false
      })
      .addCase(userOrders.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : (state.error = action.payload.message)
      })
      // update paypal payment
      .addCase(paypalPayment.pending, (state, action) => {
        state.loading = true
      })
      .addCase(paypalPayment.fulfilled, (state, action) => {
        state.loading = false
        state.order = action.payload.data.order
        state.error = false
      })
      .addCase(paypalPayment.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : (state.error = action.payload.message)
      })
      // update order status
      .addCase(updateOrder.pending, (state, action) => {
        state.loading = true
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.loading = false
        state.order = action.payload.data.order
        state.success = action.payload.data.message
        state.error = false
      })
      .addCase(updateOrder.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.error = action.payload.errors[0].msg)
          : (state.error = action.payload.message)
      })
  },
})

export const { clearState, setPage, clearOrder } = orderSlice.actions

export default orderSlice.reducer
