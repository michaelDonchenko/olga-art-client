import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import adminSlice from './reducers/adminSlice'
import authSlice from './reducers/authSlice'
import cartSlice from './reducers/cartSlice'
import categoriesSlice from './reducers/categoriesSlice'
import messageSlice from './reducers/messageSlice'
import modalSlice from './reducers/modalSlice'
import orderSlice from './reducers/orderSlice'
import productSlice from './reducers/productSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    category: categoriesSlice,
    product: productSlice,
    cart: cartSlice,
    admin: adminSlice,
    message: messageSlice,
    modal: modalSlice,
    order: orderSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
