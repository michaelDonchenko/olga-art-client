import { Grid } from '@material-ui/core'
import ImageGallery from 'react-image-gallery'
import image1 from '../../utils/image1.jpg'
import image2 from '../../utils/image2.jpg'
import image3 from '../../utils/image3.jpg'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'

const images = [
  {
    original: image1,
    thumbnail: image1,
    description: 'test description',
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image3,
    thumbnail: image3,
  },
]

const HomeCarousel: React.FC = () => {
  const {} = useSelector((state: RootState) => state.product)

  return (
    <Grid
      container
      style={{ margin: '5px 0', display: 'flex', justifyContent: 'center' }}
    >
      <Grid style={{ padding: '5px' }} item xs={12} sm={5}>
        <h1 style={{ textAlign: 'center' }}>Random Products</h1>
        <p style={{ textAlign: 'center', color: 'gray' }}>
          Note: Click the image to view the product
        </p>
      </Grid>

      <Grid item xs={12} sm={5}>
        <ImageGallery
          showPlayButton={false}
          autoPlay={true}
          slideInterval={5000}
          slideDuration={500}
          showThumbnails={false}
          items={images}
          showBullets={true}
          showNav={false}
        />
      </Grid>
    </Grid>
  )
}

export default HomeCarousel
