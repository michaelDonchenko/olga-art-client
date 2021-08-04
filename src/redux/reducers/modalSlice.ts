import { createSlice } from '@reduxjs/toolkit'

interface initialStateI {
  siteRulesModal: boolean
  adminMenuModal: boolean
  navigationModal: boolean
  errorModal: boolean
}

const initialState: initialStateI = {
  siteRulesModal: false,
  adminMenuModal: false,
  navigationModal: false,
  errorModal: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSiteRulesModal: (state) => {
      state.siteRulesModal = true
    },
    closeSiteRulesModal: (state) => {
      state.siteRulesModal = false
    },
    openAdminMenuModal: (state) => {
      state.adminMenuModal = true
    },
    closeAdminMenuModal: (state) => {
      state.adminMenuModal = false
    },
    openNavigationModal: (state) => {
      state.navigationModal = true
    },
    closeNavigationModal: (state) => {
      state.navigationModal = false
    },
    openErrorModal: (state) => {
      state.errorModal = true
    },
    closeErrorModal: (state) => {
      state.errorModal = false
    },
  },
})

export const {
  openSiteRulesModal,
  closeSiteRulesModal,
  openAdminMenuModal,
  closeAdminMenuModal,
  openNavigationModal,
  closeNavigationModal,
  openErrorModal,
  closeErrorModal,
} = modalSlice.actions

export default modalSlice.reducer
