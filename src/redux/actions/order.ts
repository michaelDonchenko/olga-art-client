import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import {
  createOrder,
  getOrder,
  getOrders,
  getUserOrders,
  UpdateOrderObj,
  updateOrderStatus,
  updatePaypalPayment,
} from '../api/order'
import { Order } from '../reducers/orderSlice'

export const create = createAsyncThunk(
  'order/create',
  async (_, { rejectWithValue }) => {
    type createOrderResponse = {
      message: string
      orderId: string
    }

    try {
      const response: AxiosResponse<createOrderResponse> = await createOrder()

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const order = createAsyncThunk(
  'order/order',
  async (id: string, { rejectWithValue }) => {
    type getOrderResponse = {
      order: Order
    }

    try {
      const response: AxiosResponse<getOrderResponse> = await getOrder(id)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const orders = createAsyncThunk(
  'order/orders',
  async (page: number, { rejectWithValue }) => {
    type getOrdersResponse = {
      orders: Order[]
      pages: number
    }

    try {
      const response: AxiosResponse<getOrdersResponse> = await getOrders(page)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const userOrders = createAsyncThunk(
  'order/userOorders',
  async (page: number, { rejectWithValue }) => {
    type getOrdersResponse = {
      orders: Order[]
      pages: number
    }

    try {
      const response: AxiosResponse<getOrdersResponse> = await getUserOrders(
        page
      )

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const paypalPayment = createAsyncThunk(
  'order/paypalPayment',
  async (id: string, { rejectWithValue }) => {
    type getPaypalPaymentResponse = {
      order: Order
      message: string
    }

    try {
      const response: AxiosResponse<getPaypalPaymentResponse> =
        await updatePaypalPayment(id)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const updateOrder = createAsyncThunk(
  'order/updateOrder',
  async (obj: UpdateOrderObj, { rejectWithValue }) => {
    type updateOrderStatusResponse = {
      order: Order
      message: string
    }

    try {
      const response: AxiosResponse<updateOrderStatusResponse> =
        await updateOrderStatus(obj)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
