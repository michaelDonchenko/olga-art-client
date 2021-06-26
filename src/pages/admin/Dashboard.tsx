import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'
import { Hidden } from '@material-ui/core'

const Dashboard = () => {
  const classes = styles()
  return (
    <div className={classes.mainContainer}>
      <Hidden xsDown>
        <AdminSidenav />
      </Hidden>
    </div>
  )
}

export default Dashboard