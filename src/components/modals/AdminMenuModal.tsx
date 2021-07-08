import { Dialog, Toolbar, IconButton } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { closeAdminMenuModal } from '../../redux/reducers/modalSlice'
import CloseIcon from '@material-ui/icons/Close'
import { Typography } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { NavLink } from 'react-router-dom'
import styles from './styles'
import { logout } from '../../redux/actions/auth'
import { useHistory } from 'react-router'

const AdminMenuModal = () => {
  const dispatch = useDispatch()

  const { adminMenuModal: modal } = useSelector(
    (state: RootState) => state.modal
  )

  const handleClose = () => {
    dispatch(closeAdminMenuModal())
  }

  const classes = styles()
  const history = useHistory()

  const handleLogout = () => {
    history.push('/')
    dispatch(logout())
    dispatch(closeAdminMenuModal())
  }

  const activeLinkStyles = {
    border: '1px solid black',
    backgroundColor: '#D3D3D3',
  }

  return (
    <Dialog open={modal} onClose={handleClose} fullScreen>
      <Toolbar style={{ backgroundColor: '#181818' }}>
        <IconButton
          style={{ color: 'white' }}
          edge='start'
          onClick={handleClose}
          aria-label='close'
        >
          <CloseIcon /> Close
        </IconButton>
      </Toolbar>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div
          style={{
            height: 'calc(100vh - 104px)',
            width: '220px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography
            align='center'
            variant='h5'
            style={{ margin: '20px auto' }}
          >
            Admin Pannel
          </Typography>

          <NavLink
            onClick={() => dispatch(closeAdminMenuModal())}
            activeStyle={activeLinkStyles}
            to='/admin/dashboard'
            exact
            className={classes.appLink}
          >
            Dashboard
          </NavLink>

          <NavLink
            onClick={() => dispatch(closeAdminMenuModal())}
            activeStyle={activeLinkStyles}
            to='/admin/orders'
            exact
            className={classes.appLink}
          >
            Orders
          </NavLink>

          <NavLink
            onClick={() => dispatch(closeAdminMenuModal())}
            activeStyle={activeLinkStyles}
            to='/admin/users'
            exact
            className={classes.appLink}
          >
            Users
          </NavLink>

          <NavLink
            onClick={() => dispatch(closeAdminMenuModal())}
            activeStyle={activeLinkStyles}
            to='/admin/categories'
            exact
            className={classes.appLink}
          >
            Categories
          </NavLink>

          <NavLink
            onClick={() => dispatch(closeAdminMenuModal())}
            activeStyle={activeLinkStyles}
            to='/admin/products'
            exact
            className={classes.appLink}
          >
            Products
          </NavLink>

          <NavLink
            onClick={() => dispatch(closeAdminMenuModal())}
            activeStyle={activeLinkStyles}
            to='/admin/create-product'
            exact
            className={classes.appLink}
          >
            Create Product
          </NavLink>

          <span onClick={() => handleLogout()} className={`${classes.appLink}`}>
            <ExitToAppIcon className={classes.icon} /> Logout
          </span>
        </div>
      </div>
    </Dialog>
  )
}

export default AdminMenuModal
