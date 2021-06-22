import { Grid } from '@material-ui/core'
import ContactForm from './ContactForm'
import SocialMedia from './SocialMedia'
import styles from './styles'

const Contact = () => {
  const classes = styles()

  return (
    <Grid className={classes.main} container>
      <Grid item xs={12} sm={5}>
        <h1 className={classes.title}>Send Me a Message</h1>

        <ContactForm />
      </Grid>

      <Grid item xs={12} sm={5}>
        <h1 className={classes.title}>My Social Media</h1>
        <SocialMedia />
      </Grid>
    </Grid>
  )
}

export default Contact
