import { Typography } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { NavLink } from 'react-router-dom'
import styles from './styles'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth'
import { useHistory } from 'react-router'

const AdminSidenav = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const history = useHistory()

  const handleLogout = () => {
    history.push('/')
    dispatch(logout())
  }

  const activeLinkStyles = {
    border: '1px solid #181818',
    backgroundColor: '#D3D3D3',
  }

  return (
    <div
      style={{
        height: 'calc(100vh - 104px)',
        width: '220px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography align='center' variant='h5' style={{ margin: '20px auto' }}>
        Admin Pannel
      </Typography>

      <NavLink
        activeStyle={activeLinkStyles}
        to='/admin/dashboard'
        exact
        className={classes.appLink}
      >
        Dashboard
      </NavLink>

      <NavLink
        activeStyle={activeLinkStyles}
        to='/admin/orders'
        exact
        className={classes.appLink}
      >
        Orders
      </NavLink>

      <NavLink
        activeStyle={activeLinkStyles}
        to='/admin/users'
        exact
        className={classes.appLink}
      >
        Users
      </NavLink>

      <NavLink
        activeStyle={activeLinkStyles}
        to='/admin/categories'
        exact
        className={classes.appLink}
      >
        Categories
      </NavLink>

      <NavLink
        activeStyle={activeLinkStyles}
        to='/admin/products'
        exact
        className={classes.appLink}
      >
        Products
      </NavLink>

      <NavLink
        activeStyle={activeLinkStyles}
        to='/admin/create-product'
        exact
        className={classes.appLink}
      >
        Create Product
      </NavLink>

      <span
        onClick={() => handleLogout()}
        className={`${classes.appLink} ${classes.logout}`}
      >
        <ExitToAppIcon className={classes.icon} /> Logout
      </span>
    </div>
  )
}

export default AdminSidenav
