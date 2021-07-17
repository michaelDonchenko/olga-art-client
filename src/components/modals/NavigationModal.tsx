import { Dialog, Toolbar, IconButton, Badge } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { closeNavigationModal } from '../../redux/reducers/modalSlice'
import CloseIcon from '@material-ui/icons/Close'
import { NavLink } from 'react-router-dom'
import styles from './styles'
import { logout } from '../../redux/actions/auth'
import { useHistory } from 'react-router'

const NavigationModal = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { navigationModal: modal } = useSelector(
    (state: RootState) => state.modal
  )
  const { user } = useSelector((state: RootState) => state.auth)
  const { products } = useSelector((state: RootState) => state.cart)

  const handleClose = () => {
    dispatch(closeNavigationModal())
  }

  const activeLinkStyles = {
    borderBottom: '2px solid',
  }

  const classes = styles()

  const handleLogout = () => {
    history.push('/')
    dispatch(logout())
    dispatch(closeNavigationModal())
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

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <NavLink
          onClick={handleClose}
          exact
          activeStyle={activeLinkStyles}
          className={classes.navigationLink}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          onClick={handleClose}
          exact
          activeStyle={activeLinkStyles}
          className={classes.navigationLink}
          to='/shop'
        >
          Shop
        </NavLink>

        <NavLink
          onClick={handleClose}
          exact
          activeStyle={activeLinkStyles}
          className={classes.navigationLink}
          to='/cart'
        >
          {products?.length !== undefined ? (
            <Badge color='secondary' badgeContent={products.length}>
              Cart
            </Badge>
          ) : (
            <>Cart</>
          )}
        </NavLink>

        {user && user.role === 'admin' ? (
          <NavLink
            onClick={handleClose}
            exact
            activeStyle={activeLinkStyles}
            className={classes.navigationLink}
            to='/admin/dashboard'
          >
            Admin Dashboard
          </NavLink>
        ) : user && user.role === 'subscriber' ? (
          <>
            <NavLink
              onClick={handleClose}
              exact
              activeStyle={activeLinkStyles}
              className={classes.navigationLink}
              to='/user/dashboard'
            >
              User Dashboard
            </NavLink>

            <span onClick={handleLogout} className={classes.navigationLink}>
              Logout
            </span>
          </>
        ) : (
          <NavLink
            onClick={handleClose}
            exact
            activeStyle={activeLinkStyles}
            className={classes.navigationLink}
            to='/login'
          >
            Login
          </NavLink>
        )}
      </div>
    </Dialog>
  )
}

export default NavigationModal
