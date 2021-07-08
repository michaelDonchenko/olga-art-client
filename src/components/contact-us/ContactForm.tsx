import styles from './styles'
import { TextField, Button, Paper } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useState } from 'react'
import HandleChange from '../../hooks/HandleChange'
import { create } from '../../redux/actions/message'
import {
  resetClearValues,
  resetErrorMessage,
  resetSuccessMessage,
} from '../../redux/reducers/messageSlice'
import ShowSuccess from '../../hooks/ShowSuccess'
import ShowError from '../../hooks/ShowError'
import { useEffect } from 'react'

const ContactForm = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { loading, successMessage, errorMessage, clearValues } = useSelector(
    (state: RootState) => state.message
  )

  const [values, setValues] = useState({
    email: '',
    text: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(create(values))
  }

  if (clearValues === true) {
    setValues({
      email: '',
      text: '',
    })

    dispatch(resetClearValues())
  }

  const handleResetAll = () => {
    dispatch(resetSuccessMessage())
    dispatch(resetErrorMessage())
  }

  useEffect(() => {
    return () => handleResetAll()
  }, [])

  return (
    <div className={classes.mainContainer}>
      <form onSubmit={handleSubmit}>
        <Paper className={classes.paperContainer}>
          <TextField
            className={classes.formElement}
            label='Email'
            name='email'
            type='email'
            required={true}
            onChange={(e) => HandleChange(e, values, setValues)}
          />

          <TextField
            className={classes.formElement}
            label='Your Message'
            name='text'
            type='text'
            multiline={true}
            rows={5}
            required={true}
            onChange={(e) => HandleChange(e, values, setValues)}
          />

          {successMessage && ShowSuccess(successMessage)}
          {errorMessage && ShowError(errorMessage)}

          <Button
            variant='contained'
            color='primary'
            type='submit'
            className={classes.formElement}
          >
            {loading ? 'Loading' : 'Send message'}
          </Button>
        </Paper>
      </form>
    </div>
  )
}

export default ContactForm
