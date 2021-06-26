import { Typography } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Paper } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import styles from './styles'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/auth'

const UserSidenav = () => {
  const classes = styles()
  const dispatch = useDispatch()

  const handleLogout = async () => {
    await dispatch(logout())
  }

  const activeLinkStyles = {
    border: '1px solid #FFB6C1',
    backgroundColor: '#fce4ec',
  }

  return (
    <Paper
      style={{
        height: 'calc(100vh - 104px)',
        width: '220px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography align='center' variant='h5' style={{ margin: '20px auto' }}>
        User Pannel
      </Typography>

      <NavLink
        activeStyle={activeLinkStyles}
        to='/user/dashboard'
        exact
        className={classes.appLink}
      >
        Dashboard
      </NavLink>

      <span
        onClick={() => handleLogout()}
        className={`${classes.appLink} ${classes.logout}`}
      >
        <ExitToAppIcon className={classes.icon} /> Logout
      </span>
    </Paper>
  )
}

export default UserSidenav
