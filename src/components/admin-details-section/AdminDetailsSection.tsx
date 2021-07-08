import { Typography } from '@material-ui/core'
import styles from './styles'
import UploadBanner from './UploadBanner'
import UploadProfile from './UploadProfile'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Loader from '../loader'
import ShowSuccess from '../../hooks/ShowSuccess'
import ShowError from '../../hooks/ShowError'
import { useEffect } from 'react'
import {
  resetSuccessMessage,
  resetErrorMessage,
} from '../../redux/reducers/adminSlice'
import { useDispatch } from 'react-redux'

const AdminDetailsSection = () => {
  const classes = styles()
  const history = useHistory()
  const dispatch = useDispatch()

  const { loading, errorMessage, successMessage } = useSelector(
    (state: RootState) => state.admin
  )

  const resetMessages = () => {
    dispatch(resetErrorMessage())
    dispatch(resetSuccessMessage())
  }

  useEffect(() => {
    return () => resetMessages()
  }, [])

  return (
    <>
      <Typography className={classes.title} variant='h5' align='center'>
        Site Details
      </Typography>

      {loading && <Loader />}
      {successMessage && ShowSuccess(successMessage)}
      {errorMessage && ShowError(errorMessage)}

      <div className={classes.mainContainer}>
        <UploadBanner />

        <UploadProfile />

        <div className={classes.container}>
          <span
            onClick={() => history.push('/admin/upload-about-me-details')}
            className={classes.spanStyle}
          >
            Upload About me details
          </span>
          <span
            onClick={() => history.push('/admin/upload-site-rules')}
            className={classes.spanStyle}
          >
            Upload Site policy rules
          </span>
        </div>
      </div>
    </>
  )
}

export default AdminDetailsSection
