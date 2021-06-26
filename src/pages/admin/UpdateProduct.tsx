import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'
import { Typography } from '@material-ui/core'
import CreateProductForm from '../../components/admin-create-product/CreateProductForm'
import { Hidden } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { resetSuccessMessage } from '../../redux/reducers/productSlice'
import { useHistory } from 'react-router'
import UpdateProductForm from '../../components/admin-create-product/UpdateProductForm'

const UpdateProduct = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <div className={classes.mainContainer}>
      <Hidden xsDown>
        <AdminSidenav />
      </Hidden>

      {/* content div */}
      <div className={classes.contentDiv}>
        <Typography align='center' variant='h5' className={classes.mainHeader}>
          Update Product
        </Typography>

        <UpdateProductForm />
      </div>
    </div>
  )
}

export default UpdateProduct
