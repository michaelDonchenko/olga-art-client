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

const CreateProduct = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const history = useHistory()

  const { successMessage, createdProductId } = useSelector(
    (state: RootState) => state.product
  )

  const handleSuccessReset = () => {
    dispatch(resetSuccessMessage())
  }

  if (successMessage && createdProductId) {
    history.push(`/admin/upload-product-images/${createdProductId}`)
  }

  useEffect(() => {
    return () => handleSuccessReset()
  }, [])

  return (
    <div className={classes.mainContainer}>
      <Hidden xsDown>
        <AdminSidenav />
      </Hidden>

      {/* content div */}
      <div className={classes.contentDiv}>
        <Typography align='center' variant='h5' className={classes.mainHeader}>
          Create new Product
        </Typography>

        <CreateProductForm />
      </div>
    </div>
  )
}

export default CreateProduct
