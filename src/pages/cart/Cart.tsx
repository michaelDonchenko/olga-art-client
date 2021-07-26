import { Grid, Typography } from '@material-ui/core'
import styles from './styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import CartTable from '../../components/tables/CartTable'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Link } from 'react-router-dom'
import DeliveryOptions from './components/DeliveryOptions'
import PaymentOptions from './components/PaymentOptions'
import CartSummary from './components/CartSummary'
import Seo from '../../hooks/Seo'

const Cart = () => {
  const classes = styles()
  const { products } = useSelector((state: RootState) => state.cart)

  return (
    <div className={classes.mainContainer}>
      <Seo title='Cart page' name='Cart' />

      <Typography align='center' className={classes.mainTitle} variant='h4'>
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
            <>
              <CartTable />
              <DeliveryOptions />
              <PaymentOptions />
            </>
          )}
        </Grid>
        <Grid item xs={12} md={4}>
          <CartSummary />
        </Grid>
      </Grid>
    </div>
  )
}

export default Cart
