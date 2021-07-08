import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'
import { Typography } from '@material-ui/core'
import { Hidden } from '@material-ui/core'
import UpdateProductForm from '../../components/admin-create-product/UpdateProductForm'
import AdminMobileSidenav from '../../components/admin-sidenav/AdminMobileSidenav'

const UpdateProduct = () => {
  const classes = styles()

  return (
    <div className={classes.mainContainer}>
      <Hidden xsDown>
        <AdminSidenav />
      </Hidden>

      {/* content div */}
      <div className={classes.contentDiv}>
        <Hidden smUp>
          <AdminMobileSidenav />
        </Hidden>

        <Typography align='center' variant='h5' className={classes.mainHeader}>
          Update Product
        </Typography>

        <UpdateProductForm />
      </div>
    </div>
  )
}

export default UpdateProduct
