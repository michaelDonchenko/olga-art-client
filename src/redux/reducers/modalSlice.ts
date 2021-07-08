import { createSlice } from '@reduxjs/toolkit'

interface initialStateI {
  siteRulesModal: boolean
  adminMenuModal: boolean
  navigationModal: boolean
}

const initialState: initialStateI = {
  siteRulesModal: false,
  adminMenuModal: false,
  navigationModal: false,
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
  },
})

export const {
  openSiteRulesModal,
  closeSiteRulesModal,
  openAdminMenuModal,
  closeAdminMenuModal,
  openNavigationModal,
  closeNavigationModal,
} = modalSlice.actions

export default modalSlice.reducer
