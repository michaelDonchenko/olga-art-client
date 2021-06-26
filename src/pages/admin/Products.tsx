import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'
import { Hidden, Typography } from '@material-ui/core'
import ProductsTable from '../../components/tables/ProductsTable'

const Products = () => {
  const classes = styles()

  return (
    <div className={classes.mainContainer}>
      <Hidden xsDown>
        <AdminSidenav />
      </Hidden>

      <div className={classes.contentDiv}>
        <Typography align='center' variant='h5' className={classes.mainHeader}>
          Products
        </Typography>

        <ProductsTable />
      </div>
    </div>
  )
}

export default Products
