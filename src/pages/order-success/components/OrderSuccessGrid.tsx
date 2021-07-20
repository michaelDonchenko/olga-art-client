import { Grid } from '@material-ui/core'
import TechSupport from './TechSupport'
import styles from '../styles'
import { Order } from '../../../redux/reducers/orderSlice'
import PhonePayment from '../../../components/payment-methods/PhonePayment'
import BankTransfer from '../../../components/payment-methods/BankTransfer'
import { PayPalButton } from 'react-paypal-button-v2'
import Loader from '../../../components/loader'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'

import { paypalPayment } from '../../../redux/actions/order'

interface Props {
  order: Order | undefined
  sdk: boolean
}

type PaymentResult = {
  status: string
}

type Params = {
  id: string
}

const OrderSuccessGrid = ({ order, sdk }: Props) => {
  const classes = styles()
  const dispatch = useDispatch()
  const params: Params = useParams()
  const { id } = params

  const handleSuccess = (paymentResult: PaymentResult) => {
    if (paymentResult.status === 'COMPLETED') {
      dispatch(paypalPayment(id))
    }
  }

  return (
    <Grid container className={classes.gridContainer}>
      {!sdk || !order ? (
        <Loader />
      ) : (
        <>
          <Grid item xs={12} md={6}>
            {order?.isPaid === true && (
              <>
                <p
                  style={{
                    color: 'green',
                    padding: '10px',
                    fontSize: '18px',
                    fontWeight: 600,
                  }}
                >
                  Thank you your order is paid succefully.
                </p>
                <p>
                  Updates about your order status and tracking number will sent
                  to your email at {order.userInfo.email}
                </p>
              </>
            )}

            {order?.isPaid === false && order.paymentMethod === 'phone' && (
              <PhonePayment />
            )}
            {order?.isPaid === false && order.paymentMethod === 'bank' && (
              <BankTransfer />
            )}
            {order?.isPaid === false &&
              order.paymentMethod === 'paypal' &&
              sdk && (
                <div
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '300px',
                      margin: '15px auto',
                      maxWidth: '90%',
                    }}
                  >
                    <PayPalButton
                      amount={order.cartTotal}
                      currency='ILS'
                      onSuccess={handleSuccess}
                    />
                  </div>
                </div>
              )}
          </Grid>

          <Grid item xs={12} md={6}>
            <TechSupport />
          </Grid>
        </>
      )}
    </Grid>
  )
}

export default OrderSuccessGrid
