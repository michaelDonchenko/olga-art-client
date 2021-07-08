import { Dialog, Toolbar, IconButton, Badge } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { closeNavigationModal } from '../../redux/reducers/modalSlice'
import CloseIcon from '@material-ui/icons/Close'
import { NavLink } from 'react-router-dom'
import styles from './styles'
import HomeIcon from '@material-ui/icons/Home'
import ShopIcon from '@material-ui/icons/Shop'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const NavigationModal = () => {
  const dispatch = useDispatch()

  const { navigationModal: modal } = useSelector(
    (state: RootState) => state.modal
  )
  const { user } = useSelector((state: RootState) => state.auth)
  const { products } = useSelector((state: RootState) => state.cart)

  const handleClose = () => {
    dispatch(closeNavigationModal())
  }

  const activeLinkStyles = {
    backgroundColor: '#D3D3D3',
  }

  const classes = styles()

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
          <HomeIcon className={classes.appIcon} /> Home
        </NavLink>
        <NavLink
          onClick={handleClose}
          exact
          activeStyle={activeLinkStyles}
          className={classes.navigationLink}
          to='/shop'
        >
          <ShopIcon className={classes.appIcon} /> Shop
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
              <ShoppingCartIcon className={classes.appIcon} />
              Cart
            </Badge>
          ) : (
            <>
              <ShoppingCartIcon className={classes.appIcon} />
              Cart
            </>
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
          <NavLink
            onClick={handleClose}
            exact
            activeStyle={activeLinkStyles}
            className={classes.navigationLink}
            to='/user/dashboard'
          >
            User Dashboard
          </NavLink>
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
