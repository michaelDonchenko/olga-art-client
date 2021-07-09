import { Typography } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import styles from '../styles'

const CartSummary = () => {
  const { products } = useSelector((state: RootState) => state.cart)
  const classes = styles()

  const getProductsTotal = () => {
    return (
      products &&
      products.reduce((currentValue, nextValue) => {
        return Number(currentValue + nextValue.price * nextValue.count)
      }, 0)
    )
  }

  return (
    <div className={classes.cartSummary}>
      <Typography className={classes.title} align='center' variant='h4'>
        Cart Summary:
      </Typography>
      <hr></hr>

      <Typography variant='h5' align='center'>
        Products
      </Typography>

      {products?.map((p, i) => (
        <p className={classes.paragraph} key={i}>
          {`${p.name} X ${p.count} = ${Math.round(p.price * p.count)} ₪`}
        </p>
      ))}

      <hr></hr>
      <Typography variant='h5' align='center'>
        Deliver Price
      </Typography>

      <p className={classes.paragraph}>0 ₪</p>
      <hr></hr>

      <Typography variant='h5' align='center'>
        Payment Fee
      </Typography>

      <p className={classes.paragraph}>0 ₪</p>
      <hr></hr>

      <Typography variant='h5' align='center'>
        Total: {getProductsTotal()} ₪
      </Typography>
    </div>
  )
}

export default CartSummary
