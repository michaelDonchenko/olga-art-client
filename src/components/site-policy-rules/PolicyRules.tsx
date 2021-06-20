import styles from './styles'
import { Button } from '@material-ui/core'

const PolicyRules = () => {
  const classes = styles()
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Our Site Policy Rules</h1>
      <Button className={classes.button} variant='contained' color='secondary'>
        View our site rules
      </Button>
    </div>
  )
}

export default PolicyRules
