import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'
import { Typography } from '@material-ui/core'
import UsersTable from '../../components/tables/UsersTable'
import { Hidden } from '@material-ui/core'
import AdminMobileSidenav from '../../components/admin-sidenav/AdminMobileSidenav'

const Users = () => {
  const classes = styles()
  return (
    <div className={classes.mainContainer}>
      <Hidden xsDown>
        <AdminSidenav />
      </Hidden>

      <div className={classes.contentDiv}>
        <Hidden smUp>
          <AdminMobileSidenav />
        </Hidden>
        <Typography align='center' variant='h5' className={classes.mainHeader}>
          Users
        </Typography>

        <UsersTable />
      </div>
    </div>
  )
}

export default Users
