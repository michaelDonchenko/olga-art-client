import { Grid } from '@material-ui/core'
import TechSupport from './TechSupport'
import styles from '../styles'
import { Order } from '../../../redux/reducers/orderSlice'
import PhonePayment from '../../../components/payment-methods/PhonePayment'
import BankTransfer from '../../../components/payment-methods/BankTransfer'
import { PayPalButton } from 'react-paypal-button-v2'

interface Props {
  order: Order | undefined
}

const OrderSuccessGrid = ({ order }: Props) => {
  const classes = styles()
  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={12} md={6}>
        {order?.isPaid === true && (
          <p style={{ color: 'green', padding: '15px' }}>
            Your order is paid succefully.
          </p>
        )}
        {order?.isPaid === false && order.paymentMethod === 'phone' && (
          <PhonePayment />
        )}
        {order?.isPaid === false && order.paymentMethod === 'bank' && (
          <BankTransfer />
        )}
        {order?.isPaid === false && order.paymentMethod === 'paypal' && (
          <div
            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <div
              style={{ width: '300px', margin: '15px auto', maxWidth: '90%' }}
            >
              <PayPalButton
                amount={20}
                currency='ILS'
                // onSuccess={handleSuccess}
                // onError={() =>
                //   setState({ ...state, error: 'Payment failed.' })
                // }
              />
            </div>
          </div>
        )}
      </Grid>

      <Grid item xs={12} md={6}>
        <TechSupport />
      </Grid>
    </Grid>
  )
}

export default OrderSuccessGrid
