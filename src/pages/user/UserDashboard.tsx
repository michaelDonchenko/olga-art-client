import styles from './styles'
import UserSidenav from '../../components/user-sidenav/UserSidenav'
import { Hidden } from '@material-ui/core'
import UserOrders from '../../components/tables/UserOrders'
import { Typography } from '@material-ui/core'
import Seo from '../../hooks/Seo'

const UserDashboard = () => {
  const classes = styles()
  return (
    <div className={classes.mainContainer}>
      <Seo title='User Dashboard' name='user-dashboard' />

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
