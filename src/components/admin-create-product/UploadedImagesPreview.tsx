import { Typography } from '@material-ui/core'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { Product } from '../../redux/reducers/productSlice'
import { productImageDelete } from '../../redux/actions/cloudinary'

const UploadedImagesPreview = () => {
  const classes = styles()
  const { product } = useSelector((state: RootState) => state.product)

  const dispatch = useDispatch()

  const handleDelete = (productId: string, public_id: string) => {
    let result = window.confirm('Are you sure you want to delete?')
    if (result) {
      dispatch(productImageDelete({ productId, public_id }))
    }
  }

  return (
    <>
      <Typography className={classes.title} variant='h6' align='center'>
        Uploaded Images
      </Typography>
      <div className={classes.previewContainer}>
        {(product as Product).images?.map((img, i) => (
          <div>
            <span
              onClick={() =>
                handleDelete((product as Product)._id, img.public_id)
              }
              className={classes.badge}
            >
              Delete
            </span>
            <img
              className={classes.image}
              key={i}
              src={img.url}
              alt={'Product image was unable to load'}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default UploadedImagesPreview
