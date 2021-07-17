import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'
import OrdersTable from '../../components/tables/OrdersTable'
import { Typography, Hidden } from '@material-ui/core'
import AdminMobileSidenav from '../../components/admin-sidenav/AdminMobileSidenav'

const Orders = () => {
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
          Orders
        </Typography>
        <OrdersTable />
      </div>
    </div>
  )
}

export default Orders
