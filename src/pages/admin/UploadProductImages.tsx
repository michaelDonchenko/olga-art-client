import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'
import { Typography } from '@material-ui/core'
import { Hidden } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { product as getProduct } from '../../redux/actions/product'
import { useParams } from 'react-router'
import UploadProductImagesForm from '../../components/admin-create-product/UploadProductImagesForm'
import { resetSuccessMessage } from '../../redux/reducers/productSlice'
import UploadedImagesPreview from '../../components/admin-create-product/UploadedImagesPreview'
import Loader from '../../components/loader'
import AdminMobileSidenav from '../../components/admin-sidenav/AdminMobileSidenav'

const UploadProductImages = () => {
  type Params = {
    id: string
  }

  const classes = styles()
  const dispatch = useDispatch()
  const { product, loading } = useSelector((state: RootState) => state.product)

  const params = useParams<Params>()
  const { id } = params

  const handleSuccessMessageReset = () => {
    dispatch(resetSuccessMessage())
  }

  useEffect(() => {
    dispatch(getProduct(id))
  }, [])

  useEffect(() => {
    return () => handleSuccessMessageReset()
  }, [])

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
          Upload Product Images
        </Typography>

        {loading && <Loader />}

        {!loading && product?._id && (
          <>
            <UploadProductImagesForm />

            {!loading && product?.images?.length ? (
              <UploadedImagesPreview />
            ) : null}
          </>
        )}

        {!loading && !product?._id && (
          <p className={classes.errorText}>
            We're sorry the product could not be found...
          </p>
        )}
      </div>
    </div>
  )
}

export default UploadProductImages
