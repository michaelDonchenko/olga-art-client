import { Paper } from '@material-ui/core'
import { TextField, Button } from '@material-ui/core'
import styles from './styles'
import { useHistory } from 'react-router'

const Register = () => {
  const classes = styles()
  const history = useHistory()

  return (
    <Paper className={classes.mainContainer}>
      <h1 className={classes.title}>Register Page</h1>

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

        <TextField
          className={classes.formElement}
          label='Confirm password'
          name='confirmPassword'
          type='password'
          required={true}
        />

        <Button
          className={classes.formElement}
          variant='contained'
          color='primary'
        >
          Register
        </Button>
      </form>

      <div className={classes.footerDiv}>
        <p>
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
  )
}

export default Register
