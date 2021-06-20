import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import styles from './styles'
import { NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home'
import ShopIcon from '@material-ui/icons/Shop'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Hidden } from '@material-ui/core'

const NavBar = () => {
  const classes = styles()

  const activeLinkStyles = {
    borderBottom: '2px solid #FFB6C1',
    color: '#FFB6C1',
  }

  return (
    <AppBar className={classes.appBar} position='sticky'>
      <Toolbar className={classes.tooBar}>
        <div className={classes.flex1}>
          <Hidden xsDown>
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
              <ShoppingCartIcon className={classes.appIcon} /> Cart
            </NavLink>
          </Hidden>
        </div>

        <div>
          <NavLink
            exact
            activeStyle={activeLinkStyles}
            className={classes.appLink}
            to='/login'
          >
            Login
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
