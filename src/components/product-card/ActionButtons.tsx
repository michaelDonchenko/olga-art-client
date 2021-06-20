import { Button } from '@material-ui/core'
import styles from './styles'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const ActionButtons: React.FC = () => {
  const classes = styles()

  return (
    <div>
      <Button
        endIcon={<ShoppingCartIcon />}
        className={classes.button}
        variant='contained'
        color='primary'
      >
        Add to cart
      </Button>
      <Button
        endIcon={<FavoriteBorderIcon />}
        className={classes.button}
        variant='outlined'
        color='secondary'
      >
        Add to whishlist
      </Button>
    </div>
  )
}

export default ActionButtons
