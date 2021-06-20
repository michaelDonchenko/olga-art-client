import { Grid } from '@material-ui/core'
import ImageGallery from 'react-image-gallery'
import image1 from '../../utils/image1.jpg'
import image2 from '../../utils/image2.jpg'
import image3 from '../../utils/image3.jpg'

const images = [
  {
    original: image1,
    thumbnail: image1,
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
  return (
    <Grid
      container
      style={{ margin: '5px 0', display: 'flex', justifyContent: 'center' }}
    >
      <Grid style={{ padding: '5px' }} item xs={12} sm={5}>
        <h1 style={{ textAlign: 'center' }}>Product name</h1>
        <p>Description</p>
      </Grid>

      <Grid item xs={12} sm={5}>
        <ImageGallery
          showPlayButton={false}
          autoPlay={true}
          slideInterval={3000}
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
