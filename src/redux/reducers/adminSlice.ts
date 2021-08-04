import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  banner,
  profileImage,
  uploadBanner,
  uploadProfile,
  aboutMe,
  updateAbout,
  siteRules,
  updateRules,
} from '../actions/admin'

interface initialStateI {
  bannerImage: string
  profileImage: string
  about: string
  siteRules: string
  loading: boolean
  errorMessage: string | boolean
  successMessage: string | boolean
}

const initialState: initialStateI = {
  bannerImage: 'https://via.placeholder.com/1280x300?text=Banner%20image',
  profileImage: 'https://via.placeholder.com/700x700?text=Profile%20image',
  about: '',
  siteRules: '',
  errorMessage: false,
  successMessage: false,
  loading: false,
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    resetErrorMessage: (state) => {
      state.errorMessage = false
    },
    resetSuccessMessage: (state) => {
      state.successMessage = false
    },
  },
  extraReducers: (builder) => {
    builder
      //upload banner image
      .addCase(uploadBanner.pending, (state, action) => {
        state.loading = true
      })
      .addCase(uploadBanner.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = action.payload.data.message
        state.errorMessage = false
      })
      .addCase(uploadBanner.rejected, (state, action: PayloadAction<any>) => {
        if (action.payload === 'Unauthorized') {
          state.loading = false
          state.errorMessage = action.payload
        } else {
          state.loading = false
          action.payload.errors
            ? (state.errorMessage = action.payload.errors[0].msg)
            : (state.errorMessage = action.payload.message)
        }
      })
      //upload profile image
      .addCase(uploadProfile.pending, (state, action) => {
        state.loading = true
      })
      .addCase(uploadProfile.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = action.payload.data.message
        state.errorMessage = false
      })
      .addCase(uploadProfile.rejected, (state, action: PayloadAction<any>) => {
        if (action.payload === 'Unauthorized') {
          state.loading = false
          state.errorMessage = action.payload
        } else {
          state.loading = false
          action.payload.errors
            ? (state.errorMessage = action.payload.errors[0].msg)
            : (state.errorMessage = action.payload.message)
        }
      })
      //get banner image
      .addCase(banner.pending, (state, action) => {
        state.loading = true
      })
      .addCase(banner.fulfilled, (state, action) => {
        state.loading = false
        state.bannerImage = action.payload
        state.errorMessage = false
      })
      .addCase(banner.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //get profile image
      .addCase(profileImage.pending, (state, action) => {
        state.loading = true
      })
      .addCase(profileImage.fulfilled, (state, action) => {
        state.loading = false
        state.profileImage = action.payload
        state.errorMessage = false
      })
      .addCase(profileImage.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //get about info
      .addCase(aboutMe.pending, (state, action) => {
        state.loading = true
      })
      .addCase(aboutMe.fulfilled, (state, action) => {
        state.loading = false
        state.about = action.payload
        state.successMessage = true
        state.errorMessage = false
      })
      .addCase(aboutMe.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //update about info
      .addCase(updateAbout.pending, (state, action) => {
        state.loading = true
      })
      .addCase(updateAbout.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = action.payload
        state.errorMessage = false
      })
      .addCase(updateAbout.rejected, (state, action: PayloadAction<any>) => {
        if (action.payload === 'Unauthorized') {
          state.loading = false
          state.errorMessage = action.payload
        } else {
          state.loading = false
          action.payload.errors
            ? (state.errorMessage = action.payload.errors[0].msg)
            : (state.errorMessage = action.payload.message)
        }
      })
      //get site rules
      .addCase(siteRules.pending, (state, action) => {
        state.loading = true
      })
      .addCase(siteRules.fulfilled, (state, action) => {
        state.loading = false
        state.siteRules = action.payload
        state.successMessage = true
        state.errorMessage = false
      })
      .addCase(siteRules.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
        action.payload.errors
          ? (state.errorMessage = action.payload.errors[0].msg)
          : (state.errorMessage = action.payload.message)
      })
      //update site rules
      .addCase(updateRules.pending, (state, action) => {
        state.loading = true
      })
      .addCase(updateRules.fulfilled, (state, action) => {
        state.loading = false
        state.successMessage = action.payload
        state.errorMessage = false
      })
      .addCase(updateRules.rejected, (state, action: PayloadAction<any>) => {
        if (action.payload === 'Unauthorized') {
          state.loading = false
          state.errorMessage = action.payload
        } else {
          state.loading = false
          action.payload.errors
            ? (state.errorMessage = action.payload.errors[0].msg)
            : (state.errorMessage = action.payload.message)
        }
      })
  },
})

export const { resetErrorMessage, resetSuccessMessage } = adminSlice.actions
export default adminSlice.reducer
