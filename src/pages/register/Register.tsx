import { Paper } from '@material-ui/core'
import { TextField, Button } from '@material-ui/core'
import styles from './styles'
import { useHistory } from 'react-router'
import { useEffect, useState } from 'react'
import { register } from '../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import HandleChange from '../../hooks/HandleChange'
import { RootState } from '../../redux/store'
import ShowSuccess from '../../hooks/ShowSuccess'
import ShowError from '../../hooks/ShowError'
import { resetError } from '../../redux/reducers/authSlice'
import Seo from '../../hooks/Seo'

const Register = () => {
  const classes = styles()
  const history = useHistory()
  const dispatch = useDispatch()
  const { auth } = useSelector((state: RootState) => state)
  const { loading, successMessage, errorMessage, user } = auth

  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { email, password, confirmPassword } = values

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(register(values))
  }

  if (email !== '' && successMessage) {
    setValues({ email: '', password: '', confirmPassword: '' })
  }

  if (user) {
    history.push('/dashboard')
  }

  const resetAuthError = () => {
    dispatch(resetError())
  }

  useEffect(() => {
    return () => resetAuthError()
  }, [])

  return (
    <>
      <Seo title='Register page' name='Register' />

      <Paper className={classes.mainContainer}>
        <h1 className={classes.title}>Register Page</h1>

        <form className={classes.formContainer} onSubmit={handleSubmit}>
          <TextField
            className={classes.formElement}
            label='Email'
            name='email'
            type='email'
            required={true}
            value={email}
            onChange={(e) => HandleChange(e, values, setValues)}
          />
          <TextField
            className={classes.formElement}
            label='Password'
            name='password'
            type='password'
            required={true}
            value={password}
            onChange={(e) => HandleChange(e, values, setValues)}
          />

          <TextField
            className={classes.formElement}
            label='Confirm password'
            name='confirmPassword'
            type='password'
            required={true}
            value={confirmPassword}
            onChange={(e) => HandleChange(e, values, setValues)}
          />

          <Button
            className={classes.formElement}
            variant='contained'
            color='primary'
            type='submit'
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Register'}
          </Button>
        </form>

        {successMessage && ShowSuccess(successMessage)}
        {errorMessage && ShowError(errorMessage)}

        <div className={classes.footerDiv}>
          <p className={classes.text}>
            Already have a user? click
            <span
              onClick={() => history.push('/login')}
              className={classes.linkSpan}
            >
              here
            </span>
            to Login
          </p>
        </div>
      </Paper>
    </>
  )
}

export default Register
