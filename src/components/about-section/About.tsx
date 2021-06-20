import { Grid } from '@material-ui/core'
import styles from './styles'

const About = () => {
  const classes = styles()
  return (
    <Grid container className={classes.main}>
      <Grid item xs={12} sm={5} className={classes.main}>
        <img
          style={{ maxWidth: '100%' }}
          src='https://via.placeholder.com/400x500?text=Image'
          alt='img'
        />
      </Grid>

      <Grid item xs={12} sm={5}>
        <h1 className={classes.title}>About me</h1>
      </Grid>
    </Grid>
  )
}

export default About
