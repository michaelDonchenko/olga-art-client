import { createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import {
  getAboutMe,
  getBanner,
  getProfileImage,
  getSiteRules,
  updateAboutMe,
  updateSiteRules,
  uploadBannerImage,
  uploadProfileImage,
} from '../api/admin'

export const uploadBanner = createAsyncThunk(
  'admin/uploadBanner',
  async (image: string, { rejectWithValue }) => {
    type uploadBannerResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<uploadBannerResponse> =
        await uploadBannerImage(image)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const uploadProfile = createAsyncThunk(
  'admin/uploadProfile',
  async (image: string, { rejectWithValue }) => {
    type uploadProfileResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<uploadProfileResponse> =
        await uploadProfileImage(image)

      return response
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const banner = createAsyncThunk(
  'admin/banner',
  async (_, { rejectWithValue }) => {
    type Document = {
      banner: {
        url: string
      }
    }

    type bannerResponse = {
      document: Document
    }

    try {
      const response: AxiosResponse<bannerResponse> = await getBanner()

      if (!response.data.document.banner.url) {
        return 'https://via.placeholder.com/1280x300?text=Banner%20image'
      }

      return response.data.document.banner.url
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const profileImage = createAsyncThunk(
  'admin/profileImage',
  async (_, { rejectWithValue }) => {
    type Document = {
      profileImage: {
        url: string
      }
    }

    type profileImageResponse = {
      document: Document
    }

    try {
      const response: AxiosResponse<profileImageResponse> =
        await getProfileImage()

      if (!response.data.document.profileImage.url) {
        return 'https://via.placeholder.com/700x700?text=Profile%20image'
      }

      return response.data.document.profileImage.url
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const aboutMe = createAsyncThunk(
  'admin/aboutMe',
  async (_, { rejectWithValue }) => {
    type Document = {
      about: string
    }

    type profileImageResponse = {
      document: Document
    }

    try {
      const response: AxiosResponse<profileImageResponse> = await getAboutMe()

      if (!response.data.document.about) {
        return 'No yet about me'
      }

      return response.data.document.about
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const updateAbout = createAsyncThunk(
  'admin/updateAbout',
  async (text: string, { rejectWithValue }) => {
    type profileImageResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<profileImageResponse> = await updateAboutMe(
        text
      )

      return response.data.message
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const siteRules = createAsyncThunk(
  'admin/siteRules',
  async (_, { rejectWithValue }) => {
    type Document = {
      siteRules: string
    }

    type profileImageResponse = {
      document: Document
    }

    try {
      const response: AxiosResponse<profileImageResponse> = await getSiteRules()

      if (!response.data.document.siteRules) {
        return 'No yet site rules'
      }

      return response.data.document.siteRules
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)

export const updateRules = createAsyncThunk(
  'admin/updateRules',
  async (text: string, { rejectWithValue }) => {
    type profileImageResponse = {
      message: string
    }

    try {
      const response: AxiosResponse<profileImageResponse> =
        await updateSiteRules(text)

      return response.data.message
    } catch (error) {
      return rejectWithValue(error.response.data)
    }
  }
)
