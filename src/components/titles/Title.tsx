import { Typography } from '@material-ui/core'
import styles from './styles'

type Props = {
  content: string
}

const Title: React.FC<Props> = ({ content }) => {
  const classes = styles()

  return (
    <div>
      <Typography variant='h5' align='center' className={classes.title}>
        {content}
      </Typography>
    </div>
  )
}

export default Title
