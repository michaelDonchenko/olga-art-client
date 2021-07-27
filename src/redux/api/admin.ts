import axios from 'axios'
axios.defaults.withCredentials = true
const server_url = process.env.REACT_APP_SERVER_URL

export const uploadBannerImage = async (image: string) =>
  await axios.post(`${server_url}/admin/upload-banner-image`, { image })

export const uploadProfileImage = async (image: string) =>
  await axios.post(`${server_url}/admin/upload-profile-image`, { image })

export const getBanner = async () =>
  await axios.get(`${server_url}/admin/banner`)

export const getProfileImage = async () =>
  await axios.get(`${server_url}/admin/profile-image`)

export const getAboutMe = async () =>
  await axios.get(`${server_url}/admin/about-me`)

export const updateAboutMe = async (text: string) =>
  await axios.post(`${server_url}/admin/update-about-me`, { text })

export const getSiteRules = async () =>
  await axios.get(`${server_url}/admin/site-rules`)

export const updateSiteRules = async (text: string) =>
  await axios.post(`${server_url}/admin/update-site-rules`, { text })

export const getTinyApiKey = async () =>
  await axios.get(`${server_url}/admin/tiny-api-key`)
