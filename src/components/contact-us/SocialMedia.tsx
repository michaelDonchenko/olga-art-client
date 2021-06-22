import { Paper } from '@material-ui/core'
import SocialMediaSection from './SocialMediaSection'
import styles from './styles'

const SocialMedia = () => {
  const classes = styles()
  return (
    <div className={classes.mainContainer}>
      <Paper className={classes.paperContainer}>
        <SocialMediaSection />
      </Paper>
    </div>
  )
}

export default SocialMedia
