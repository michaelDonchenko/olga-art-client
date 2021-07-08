import { Grid, Typography } from '@material-ui/core'
import styles from './styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CartTable from '../../components/tables/CartTable'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Link } from 'react-router-dom'

const Cart = () => {
  const classes = styles()
  const { products } = useSelector((state: RootState) => state.cart)

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.title} variant='h4'>
        Your Cart <ShoppingCartIcon className={classes.titleIcon} />
      </Typography>

      <Grid container>
        <Grid item xs={12} md={8}>
          {products === null ? (
            <Typography variant='h6' align='center'>
              Your cart is empty, click{' '}
              <Link className={classes.link} to='/shop'>
                here
              </Link>{' '}
              in order to continue shopping
            </Typography>
          ) : (
            <CartTable />
          )}
        </Grid>
        <Grid item xs={12} md={4}></Grid>
      </Grid>
    </div>
  )
}

export default Cart
