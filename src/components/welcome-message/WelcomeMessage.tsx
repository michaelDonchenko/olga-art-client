import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router'
import styles from './styles'

const WelcomeMessage: React.FC = () => {
  const user = false
  const history = useHistory()
  const classes = styles()

  return (
    <div>
      {!user ? (
        <Typography className={classes.title} variant='h5' align='center'>
          Hello guest click
          <span
            onClick={() => history.push('/login')}
            className={classes.linkSpan}
          >
            here
          </span>
          to login.
        </Typography>
      ) : (
        <Typography className={classes.title} variant='h5' align='center'>
          Hello {user} welcome back.
        </Typography>
      )}
    </div>
  )
}

export default WelcomeMessage
