import styles from './styles'
import { TextField, Button, Paper } from '@material-ui/core'

const ContactForm = () => {
  const classes = styles()

  return (
    <div className={classes.mainContainer}>
      <form>
        <Paper className={classes.paperContainer}>
          <TextField
            className={classes.formElement}
            label='Email'
            name='email'
            type='email'
            required={true}
          />

          <TextField
            className={classes.formElement}
            label='Your Message'
            name='message'
            type='text'
            multiline={true}
            rows={5}
            required={true}
          />

          <Button
            variant='contained'
            color='primary'
            className={classes.formElement}
          >
            Send
          </Button>
        </Paper>
      </form>
    </div>
  )
}

export default ContactForm
