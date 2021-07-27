import styles from './styles'
import { Editor } from '@tinymce/tinymce-react'
import { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import {
  updateRules,
  siteRules as getSiteRules,
} from '../../redux/actions/admin'
import {
  resetErrorMessage,
  resetSuccessMessage,
} from '../../redux/reducers/adminSlice'
import ShowError from '../../hooks/ShowError'
import { getTinyApiKey } from '../../redux/api/admin'

const UpdateSiteRulesEditor = () => {
  const classes = styles()
  const history = useHistory()
  const [text, setText] = useState('')
  const [tinyApi, setTinyApi] = useState('')
  const dispatch = useDispatch()

  const { loading, siteRules, errorMessage, successMessage } = useSelector(
    (state: RootState) => state.admin
  )

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(updateRules(text))
  }

  if (!loading && siteRules !== '' && successMessage === true) {
    dispatch(resetSuccessMessage())
    setText(siteRules)
  }

  const handleResetMessages = () => {
    dispatch(resetSuccessMessage())
    dispatch(resetErrorMessage())
  }

  const handleTinyApiKey = async () => {
    const { data } = await getTinyApiKey()
    setTinyApi(data.tinyApiKey)
  }

  useEffect(() => {
    handleTinyApiKey()
    return () => handleResetMessages()
  }, [])

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        {tinyApi && (
          <Editor
            apiKey={tinyApi}
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
            onInit={() => dispatch(getSiteRules())}
          />
        )}

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

export default UpdateSiteRulesEditor
