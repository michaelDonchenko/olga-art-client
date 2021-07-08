import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'
import { Hidden, Typography } from '@material-ui/core'
import ProductsTable from '../../components/tables/ProductsTable'
import AdminMobileSidenav from '../../components/admin-sidenav/AdminMobileSidenav'

const Products = () => {
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
          Products
        </Typography>

        <ProductsTable />
      </div>
    </div>
  )
}

export default Products
