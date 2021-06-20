import SocialMediaSection from './SocialMediaSection'
import styles from './styles'

const SocialMedia = () => {
  const classes = styles()
  return (
    <div>
      <h1 className={classes.title}>My Social Media</h1>
      <SocialMediaSection />
    </div>
  )
}

export default SocialMedia
