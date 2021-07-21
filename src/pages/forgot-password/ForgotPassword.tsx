import { Paper } from '@material-ui/core'
import { TextField, Button } from '@material-ui/core'
import styles from '../register/styles'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import { forgotPassowrd } from '../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import HandleChange from '../../hooks/HandleChange'
import { RootState } from '../../redux/store'
import ShowSuccess from '../../hooks/ShowSuccess'
import ShowError from '../../hooks/ShowError'
import { resetError, successReset } from '../../redux/reducers/authSlice'

const ForgotPassword = () => {
  const classes = styles()
  const history = useHistory()
  const dispatch = useDispatch()
  const { auth } = useSelector((state: RootState) => state)
  const { loading, successMessage, errorMessage, user } = auth

  const [values, setValues] = useState({
    email: '',
  })

  const { email } = values

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(forgotPassowrd(email))
  }

  if (email !== '' && successMessage) {
    setValues({ email: '' })
  }

  if (user) {
    history.push('/dashboard')
  }

  const resetState = () => {
    dispatch(resetError())
    dispatch(successReset())
  }

  useEffect(() => {
    return () => resetState()
  }, [])

  return (
    <Paper className={classes.mainContainer}>
      <h1 className={classes.title}>Forgot password?</h1>
      <p className={classes.text}>
        In order to reset your password type your email and we will send you
        password reset link.
      </p>

      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <TextField
          className={classes.formElement}
          label='Email'
          name='email'
          type='email'
          required={true}
          value={email}
          onChange={(e) => {
            return HandleChange(e, values, setValues), dispatch(successReset())
          }}
        />

        <Button
          className={classes.formElement}
          variant='contained'
          color='primary'
          type='submit'
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Submit'}
        </Button>
      </form>

      {successMessage && ShowSuccess(successMessage)}
      {errorMessage && ShowError(errorMessage)}

      <div className={classes.footerDiv}>
        <p className={classes.text}>
          Back to login click
          <span
            onClick={() => history.push('/login')}
            className={classes.linkSpan}
          >
            here
          </span>
        </p>
      </div>
    </Paper>
  )
}

export default ForgotPassword
