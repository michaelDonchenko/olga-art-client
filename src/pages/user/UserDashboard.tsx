import styles from './styles'
import UserSidenav from '../../components/user-sidenav/UserSidenav'
import { Hidden } from '@material-ui/core'
import UserOrders from '../../components/tables/UserOrders'
import { Typography } from '@material-ui/core'

const UserDashboard = () => {
  const classes = styles()
  return (
    <div className={classes.mainContainer}>
      <Hidden xsDown>
        <UserSidenav />
      </Hidden>

      <div className={classes.contentDiv}>
        <Typography className={classes.mainHeader} variant='h5' align='center'>
          Purchase History
        </Typography>
        <UserOrders />
      </div>
    </div>
  )
}

export default UserDashboard
