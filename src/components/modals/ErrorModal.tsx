import { Dialog, Typography } from '@material-ui/core'
import { closeErrorModal } from '../../redux/reducers/modalSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import styles from './styles'
import { DialogContent } from '@material-ui/core'
import { DialogTitle } from '@material-ui/core'
import { logout } from '../../redux/actions/auth'
import { resetErrorMessage as resetAdminError } from '../../redux/reducers/adminSlice'
import { resetErrorMessage as resetMessageError } from '../../redux/reducers/messageSlice'
import { resetError as resetAuthError } from '../../redux/reducers/authSlice'
import { clearError as resetCartError } from '../../redux/reducers/cartSlice'
import { resetErrorMessage as resetCategoryError } from '../../redux/reducers/categoriesSlice'
import { resetError as resetOrderError } from '../../redux/reducers/orderSlice'
import { resetError } from '../../redux/reducers/productSlice'

const ErrorModal = () => {
  const dispatch = useDispatch()
  const classes = styles()

  const { errorModal } = useSelector((state: RootState) => state.modal)

  const handleClose = () => {
    dispatch(closeErrorModal())
  }

  const handleLogout = () => {
    dispatch(logout())
    dispatch(resetAdminError())
    dispatch(resetMessageError())
    dispatch(resetAuthError())
    dispatch(resetCartError())
    dispatch(resetCategoryError())
    dispatch(resetOrderError())
    dispatch(resetError())
    dispatch(closeErrorModal())
  }

  return (
    <Dialog open={errorModal} onClose={handleClose}>
      <div style={{ width: '600px', maxWidth: '100%' }}>
        <DialogTitle>
          <Typography align='center' variant='h5' className={classes.header}>
            Error: Unauthorized
          </Typography>
        </DialogTitle>

        <DialogContent style={{ padding: '10px' }}>
          <p>
            Your session probably expired please{' '}
            <span
              onClick={handleLogout}
              style={{ cursor: 'pointer', fontWeight: 'bold' }}
            >
              Logout
            </span>{' '}
            in order to get new session
          </p>
        </DialogContent>
      </div>
    </Dialog>
  )
}

export default ErrorModal
