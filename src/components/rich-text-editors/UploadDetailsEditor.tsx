import styles from './styles'
import { Editor } from '@tinymce/tinymce-react'
import { useState } from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { aboutMe, updateAbout } from '../../redux/actions/admin'
import {
  resetErrorMessage,
  resetSuccessMessage,
} from '../../redux/reducers/adminSlice'
import ShowError from '../../hooks/ShowError'
import { useEffect } from 'react'

const UploadDetailsEditor = () => {
  const classes = styles()
  const history = useHistory()
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const { loading, about, errorMessage, successMessage } = useSelector(
    (state: RootState) => state.admin
  )

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(updateAbout(text))
  }

  if (!loading && about !== '' && successMessage === true) {
    dispatch(resetSuccessMessage())
    setText(about)
  }

  const handleResetMessages = () => {
    dispatch(resetSuccessMessage())
    dispatch(resetErrorMessage())
  }

  useEffect(() => {
    return () => handleResetMessages()
  }, [])

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        <Editor
          apiKey='2q2bdjlqnx7i6d0lbkldb695k5mgi3j1j7wfsx4y5prpnd4s'
          value={text}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
          }}
          onEditorChange={(value) => setText(value)}
          onInit={() => dispatch(aboutMe())}
        />

        {errorMessage && ShowError(errorMessage)}
        <Button
          onClick={handleSubmit}
          className={classes.button}
          color='primary'
          variant='contained'
        >
          {loading ? 'Loading...' : 'Submit'}
        </Button>

        <Button
          onClick={() => history.push('/admin/dashboard')}
          className={classes.button}
          color='secondary'
          variant='outlined'
        >
          Back to dashboard
        </Button>
      </div>
    </div>
  )
}

export default UploadDetailsEditor
