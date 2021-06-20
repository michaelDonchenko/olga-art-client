import { Paper } from '@material-ui/core'
import { TextField, Button } from '@material-ui/core'
import styles from './styles'
import { useHistory } from 'react-router'

const Login = () => {
  const classes = styles()
  const history = useHistory()

  return (
    <Paper className={classes.mainContainer}>
      <h1 className={classes.title}>Login Page</h1>

      <form className={classes.formContainer}>
        <TextField
          className={classes.formElement}
          label='Email'
          name='email'
          type='email'
          required={true}
        />
        <TextField
          className={classes.formElement}
          label='Password'
          name='password'
          type='password'
          required={true}
        />

        <Button
          className={classes.formElement}
          variant='contained'
          color='primary'
        >
          Login
        </Button>
      </form>

      <div className={classes.footerDiv}>
        <p>
          Don't have an account? click
          <span
            onClick={() => history.push('/register')}
            className={classes.linkSpan}
          >
            here
          </span>
          to register
        </p>
        <p>
          Forgot password? click
          <span className={classes.linkSpan}>here</span>to get password reset
          link
        </p>
      </div>
    </Paper>
  )
}

export default Login
