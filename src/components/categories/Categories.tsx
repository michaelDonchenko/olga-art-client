import { Button } from '@material-ui/core'
import styles from './styles'

const Categories = () => {
  const classes = styles()

  return (
    <div
      style={{
        padding: '20px 0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <Button className={classes.element} color='primary'>
        Category
      </Button>
      <Button className={classes.element} color='primary'>
        Category2
      </Button>
      <Button className={classes.element} color='primary'>
        Category3
      </Button>
      <Button className={classes.element} color='primary'>
        Category4
      </Button>
      <Button className={classes.element} color='primary'>
        Category5
      </Button>
      <Button className={classes.element} color='primary'>
        Category6
      </Button>
    </div>
  )
}

export default Categories
