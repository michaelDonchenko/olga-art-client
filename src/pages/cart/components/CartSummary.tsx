import { Typography, Button } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../../redux/store'
import styles from '../styles'

const CartSummary = () => {
  const { products, delivery, paymentMethod } = useSelector(
    (state: RootState) => state.cart
  )
  const { user } = useSelector((state: RootState) => state.auth)
  const classes = styles()

  const getProductsTotal = () => {
    let productsTotal = 0
    let total = 0
    let deliveyPrice =
      delivery === 'regular'
        ? 16
        : delivery === 'boxit'
        ? 26
        : delivery === 'express'
        ? 59
        : 0

    products &&
      products.reduce((currentValue, nextValue) => {
        return (productsTotal = Number(
          currentValue + nextValue.price * nextValue.count
        ))
      }, 0)

    if (delivery) {
      total = productsTotal + deliveyPrice
    }

    if (paymentMethod === 'paypal') {
      total = total * 1.05
    }

    return Math.round(total)
  }

  return (
    <div className={classes.cartSummary}>
      <Typography className={classes.title} align='center' variant='h4'>
        Cart Summary:
      </Typography>
      <hr></hr>

      <Typography className={classes.title} variant='h5' align='center'>
        Products:
      </Typography>

      {products?.map((p, i) => (
        <p className={classes.paragraph} key={i}>
          {`${p.name} X ${p.count} = ${Math.round(p.price * p.count)} ₪`}
        </p>
      ))}

      <hr></hr>
      <Typography className={classes.title} variant='h5' align='center'>
        Deliver Price:
      </Typography>

      {delivery && (
        <p className={classes.paragraph}>
          {delivery === 'regular'
            ? '16 ₪'
            : delivery === 'boxit'
            ? '26 ₪'
            : delivery === 'express'
            ? '59 ₪'
            : 'Free'}
        </p>
      )}

      <hr></hr>

      <Typography className={classes.title} variant='h5' align='center'>
        Payment Fee:
      </Typography>

      {paymentMethod && (
        <p className={classes.paragraph}>
          {paymentMethod === 'paypal' ? '+ 5%' : 'No payment fee'}
        </p>
      )}

      <hr></hr>

      <Typography variant='h5' align='center'>
        Total: {getProductsTotal()} ₪
      </Typography>

      {!user ? (
        <p className={classes.paragraph}>
          Note: Please <Link to='/login'>Login</Link> in order to continue to
          checkout
        </p>
      ) : (
        <Button
          variant='contained'
          className={classes.checkoutButton}
          disabled={!products?.length || !paymentMethod || !delivery}
        >
          Continue to checkout
        </Button>
      )}
    </div>
  )
}

export default CartSummary
