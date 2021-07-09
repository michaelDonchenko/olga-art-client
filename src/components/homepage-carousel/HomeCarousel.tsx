import { Grid } from '@material-ui/core'
import ImageGallery from 'react-image-gallery'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { randomProducts as getRandomProducs } from '../../redux/actions/product'
import Loader from '../loader'
import { useHistory } from 'react-router'
import styles from './styles'

const HomeCarousel: React.FC = () => {
  const { loading, randomProducts } = useSelector(
    (state: RootState) => state.product
  )
  const dispatch = useDispatch()
  const history = useHistory()
  const classes = styles()

  useEffect(() => {
    dispatch(getRandomProducs())
  }, [])

  return (
    <Grid container className={classes.container}>
      <Grid className={classes.leftContainer} item xs={12} sm={5}>
        <h1 className={classes.title}>Random Products</h1>
        <p className={classes.text}>
          Note: Click on the Image in order to see the product
        </p>
      </Grid>

      <Grid item xs={12} sm={5}>
        {loading && <Loader />}
        {!loading && randomProducts.length > 0 && (
          <div style={{ cursor: 'pointer' }}>
            <ImageGallery
              showPlayButton={false}
              autoPlay={true}
              slideInterval={5000}
              slideDuration={500}
              showThumbnails={false}
              items={randomProducts}
              showBullets={true}
              showNav={true}
              onClick={(e: any) => {
                const foundProduct = randomProducts.find(
                  (p) => p.original === e.target.src
                )
                history.push(`/product/${foundProduct?.productId}`)
              }}
            />
          </div>
        )}
      </Grid>
    </Grid>
  )
}

export default HomeCarousel
