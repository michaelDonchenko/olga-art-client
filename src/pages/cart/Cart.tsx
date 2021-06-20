import { Typography } from '@material-ui/core'
import styles from './styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

const Cart = () => {
  const classes = styles()

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.title} variant='h4'>
        Your Cart <ShoppingCartIcon className={classes.titleIcon} />
      </Typography>
    </div>
  )
}

export default Cart
