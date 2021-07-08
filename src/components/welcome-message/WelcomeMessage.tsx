import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router'
import styles from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const WelcomeMessage: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth)
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
          Hello <span className={classes.name}>{user.email.split('@')[0]}</span>
          , welcome back.
        </Typography>
      )}
    </div>
  )
}

export default WelcomeMessage
