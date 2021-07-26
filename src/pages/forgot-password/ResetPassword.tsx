import { Paper } from '@material-ui/core'
import { TextField, Button } from '@material-ui/core'
import styles from '../register/styles'
import { useHistory, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HandleChange from '../../hooks/HandleChange'
import { RootState } from '../../redux/store'
import ShowSuccess from '../../hooks/ShowSuccess'
import ShowError from '../../hooks/ShowError'
import { resetError, successReset } from '../../redux/reducers/authSlice'
import { passwordAction, passwordValidation } from '../../redux/actions/auth'
import Loader from '../../components/loader'
import Seo from '../../hooks/Seo'

type Params = {
  id: string
}

const ResetPassword = () => {
  const classes = styles()
  const history = useHistory()
  const params: Params = useParams()
  const dispatch = useDispatch()
  const { auth } = useSelector((state: RootState) => state)
  const {
    loading,
    user,
    passwordValidatorError,
    resetPasswordError,
    resetPasswordSuccess,
  } = auth
  const { id } = params

  const [values, setValues] = useState({
    password: '',
    confirmPassword: '',
  })

  const { password, confirmPassword } = values

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(passwordAction({ ...values, resetPasswordToken: id }))
  }

  if (password !== '' && resetPasswordSuccess) {
    setValues({ password: '', confirmPassword: '' })
  }

  if (user) {
    history.push('/dashboard')
  }

  const resetState = () => {
    dispatch(resetError())
    dispatch(successReset())
  }

  const resetPasswordValidator = () => {
    dispatch(passwordValidation(id))
  }

  useEffect(() => {
    resetPasswordValidator()
    return () => resetState()
  }, [])

  return (
    <Paper className={classes.mainContainer}>
      <Seo title='Reset password' name='reset-password' />

      {loading && <Loader />}
      {!loading && passwordValidatorError ? (
        <p style={{ color: 'red', padding: '10px' }}>
          {passwordValidatorError}
        </p>
      ) : (
        <>
          <h1 className={classes.title}>Reset Password</h1>
          <p className={classes.text}>Choose your new password</p>

          <form className={classes.formContainer} onSubmit={handleSubmit}>
            <TextField
              className={classes.formElement}
              label='New Password'
              name='password'
              type='password'
              required={true}
              value={password}
              onChange={(e) => {
                return (
                  HandleChange(e, values, setValues), dispatch(successReset())
                )
              }}
            />

            <TextField
              className={classes.formElement}
              label='Confirm your password'
              name='confirmPassword'
              type='password'
              required={true}
              value={confirmPassword}
              onChange={(e) => {
                return (
                  HandleChange(e, values, setValues), dispatch(successReset())
                )
              }}
            />

            <Button
              className={classes.formElement}
              variant='contained'
              color='primary'
              type='submit'
              disabled={loading}
            >
              {'Change Passowrd'}
            </Button>
          </form>

          {resetPasswordSuccess && ShowSuccess(resetPasswordSuccess)}
          {resetPasswordError && ShowError(resetPasswordError)}
        </>
      )}
    </Paper>
  )
}

export default ResetPassword
