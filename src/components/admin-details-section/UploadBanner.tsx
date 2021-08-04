import { Button } from '@material-ui/core'
import { useState } from 'react'
import styles from './styles'
import Resizer from 'react-image-file-resizer'
import { useDispatch } from 'react-redux'
import { uploadBanner } from '../../redux/actions/admin'

type File = FileList | null

const UploadBanner = () => {
  const classes = styles()
  const [image, setImage] = useState<File>()
  const dispatch = useDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (image) {
      Resizer.imageFileResizer(
        image[0],
        500,
        500,
        'auto',
        100,
        0,
        (uri: any) => {
          dispatch(uploadBanner(uri))
        },
        'base64'
      )
    }
  }

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <h2>Site banner</h2>
      <input
        onChange={handleChange}
        className={classes.formElement}
        type='file'
        accept='image/*'
      />

      <Button
        className={classes.formElement}
        type='submit'
        variant='contained'
        color='primary'
      >
        Upload
      </Button>
    </form>
  )
}

export default UploadBanner
