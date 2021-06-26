import { Button } from '@material-ui/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { RootState } from '../../redux/store'
import styles from './styles'
import Resizer from 'react-image-file-resizer'
import { productImageUpload } from '../../redux/actions/cloudinary'
import ShowError from '../../hooks/ShowError'
import { setErrorMessage } from '../../redux/reducers/productSlice'
import ShowSuccess from '../../hooks/ShowSuccess'

const UploadProductImagesForm = () => {
  type Params = {
    id: string
  }

  type File = null | FileList

  const [files, setFiles] = useState<File>(null)

  const classes = styles()
  const dispatch = useDispatch()
  const { loading, errorMessage, successMessage } = useSelector(
    (state: RootState) => state.product
  )

  const params = useParams<Params>()
  const { id } = params

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!files?.length) {
      return dispatch(
        setErrorMessage({
          message: 'Please choose at least one image',
        })
      )
    }

    if (files && files.length > 4) {
      return dispatch(
        setErrorMessage({
          message: 'Please do not upload more than 4 images at once',
        })
      )
    }

    let array: string[] = []
    if (files?.length) {
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          700,
          700,
          'auto',
          100,
          0,
          (uri: any) => {
            array.push(uri)

            if (array.length === files.length) {
              dispatch(productImageUpload({ id, array }))
            }
          },
          'base64'
        )
      }
    }
  }

  return (
    <form className={classes.uplaodImageContainer} onSubmit={handleSubmit}>
      <input
        className={classes.formElement}
        style={{
          fontSize: '15px',
          display: 'flex',
          margin: '20px 0',
          textAlign: 'center',
          width: '300px',
        }}
        type='file'
        accept='image/*'
        name='imagetoUpload'
        multiple
        onChange={handleChange}
      />

      {errorMessage && ShowError(errorMessage)}
      {successMessage && ShowSuccess(successMessage)}

      <Button
        className={classes.uploadImagesButton}
        color='primary'
        variant='contained'
        type='submit'
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Upload'}
      </Button>
    </form>
  )
}

export default UploadProductImagesForm
