import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import styles from './styles'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import ShopIcon from '@material-ui/icons/Shop'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Badge } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useState } from 'react'
import { useEffect } from 'react'
import MobileNavigation from './MobileNavigation'

const NavBar = () => {
  const classes = styles()
  const { user } = useSelector((state: RootState) => state.auth)
  const { products } = useSelector((state: RootState) => state.cart)

  const activeLinkStyles = {
    borderBottom: '2px solid #FFB6C1',
    color: '#FFB6C1',
  }

  const [width, setWidth] = useState(window.innerWidth)

  const handleWithChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWithChange)
    return () => window.removeEventListener('resize', handleWithChange)
  }, [])

  return (
    <AppBar className={classes.appBar} position='sticky'>
      <Toolbar className={classes.tooBar}>
        {width > 700 ? (
          <>
            <div className={classes.flex1}>
              <NavLink
                exact
                activeStyle={activeLinkStyles}
                className={classes.appLink}
                to='/'
              >
                <HomeIcon className={classes.appIcon} /> Home
              </NavLink>
              <NavLink
                exact
                activeStyle={activeLinkStyles}
                className={classes.appLink}
                to='/shop'
              >
                <ShopIcon className={classes.appIcon} /> Shop
              </NavLink>

              <NavLink
                exact
                activeStyle={activeLinkStyles}
                className={classes.appLink}
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
            </div>

            <div>
              {user && user.role === 'admin' ? (
                <NavLink
                  exact
                  activeStyle={activeLinkStyles}
                  className={classes.appLink}
                  to='/admin/dashboard'
                >
                  Admin Dashboard
                </NavLink>
              ) : user && user.role === 'subscriber' ? (
                <NavLink
                  exact
                  activeStyle={activeLinkStyles}
                  className={classes.appLink}
                  to='/user/dashboard'
                >
                  User Dashboard
                </NavLink>
              ) : (
                <NavLink
                  exact
                  activeStyle={activeLinkStyles}
                  className={classes.appLink}
                  to='/login'
                >
                  Login
                </NavLink>
              )}
            </div>
          </>
        ) : (
          <MobileNavigation />
        )}
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
