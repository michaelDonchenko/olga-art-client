import styles from './styles'
import { Paper } from '@material-ui/core'
import moment from 'moment'

type MessageType = {
  text: string
  email: string
  createdAt: string
}

interface Props {
  message: MessageType
}

const Message = ({ message }: Props) => {
  const classes = styles()

  return (
    <Paper elevation={2} className={classes.message}>
      <p>{message.text}</p>
      <p>Posted by: {message.email}</p>
      <p>{moment(message.createdAt).fromNow()}</p>
    </Paper>
  )
}

export default Message
