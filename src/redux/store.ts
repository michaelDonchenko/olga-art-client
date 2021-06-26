import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import authSlice from './reducers/authSlice'
import categoriesSlice from './reducers/categoriesSlice'
import productSlice from './reducers/productSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    category: categoriesSlice,
    product: productSlice,
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
