import { Grid } from '@material-ui/core'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { product as getProduct } from '../../redux/actions/product'
import Loader from '../../components/loader'
import ProductInfoSection from './components/ProductInfoSection'
import ImageGallery from 'react-image-gallery'
import { Product } from '../../redux/reducers/productSlice'

const SingelProduct = () => {
  type Params = {
    id: string
  }

  const classes = styles()
  const dispatch = useDispatch()
  const { loading, product, productImages } = useSelector(
    (state: RootState) => state.product
  )
  const params: Params = useParams()
  const { id } = params

  useEffect(() => {
    dispatch(getProduct(id))
  }, [])

  return (
    <div className={classes.container}>
      {loading ? (
        <Loader />
      ) : (
        <Grid container>
          <Grid item xs={12} md={6}>
            {loading && <Loader />}
            {!loading && productImages.length > 0 && (
              <div style={{ padding: '20px 10px' }}>
                <ImageGallery
                  showPlayButton={false}
                  autoPlay={true}
                  slideInterval={7000}
                  slideDuration={500}
                  showThumbnails={true}
                  items={productImages}
                  showBullets={true}
                  showNav={true}
                />
              </div>
            )}
          </Grid>

          <Grid item xs={12} md={6}>
            <ProductInfoSection product={product as Product} />
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export default SingelProduct