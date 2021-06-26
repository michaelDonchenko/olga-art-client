import { Paper } from '@material-ui/core'
import { TextField, Button } from '@material-ui/core'
import styles from './styles'
import { useHistory } from 'react-router'
import HandleChange from '../../hooks/HandleChange'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/auth'
import { useState } from 'react'
import ShowError from '../../hooks/ShowError'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { resetError } from '../../redux/reducers/authSlice'

const Login = () => {
  const classes = styles()
  const history = useHistory()
  const dispatch = useDispatch()
  const { user, errorMessage, loading } = useSelector(
    (state: RootState) => state.auth
  )

  const [values, setValues] = useState({
    email: '',
    password: '',
  })

  const { email, password } = values

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(login(values))
  }

  if (user && user.role === 'subscriber') {
    history.push('/user/dashboard')
  }

  if (user && user.role === 'admin') {
    history.push('/admin/dashboard')
  }

  const resetAuthError = () => {
    dispatch(resetError())
  }

  useEffect(() => {
    return () => resetAuthError()
  }, [])

  return (
    <Paper className={classes.mainContainer}>
      <h1 className={classes.title}>Login Page</h1>

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

        <Button
          className={classes.formElement}
          variant='contained'
          color='primary'
          type='submit'
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Login'}
        </Button>
      </form>

      {errorMessage && ShowError(errorMessage)}

      <div className={classes.footerDiv}>
        <p className={classes.text}>
          Don't have an account? click
          <span
            onClick={() => history.push('/register')}
            className={classes.linkSpan}
          >
            here
          </span>
          to register
        </p>
        <p className={classes.text}>
          Forgot password? click
          <span className={classes.linkSpan}>here</span>to get password reset
          link
        </p>
      </div>
    </Paper>
  )
}

export default Login
