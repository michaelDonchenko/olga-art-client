import styles from '../styles'
import { Order as OrderProps } from '../../../redux/reducers/orderSlice'
import { Paper, Grid, Typography } from '@material-ui/core'
import ClearIcon from '@material-ui/icons/Clear'
import CheckIcon from '@material-ui/icons/Check'

interface Props {
  order: OrderProps | undefined
}

const Order = ({ order }: Props) => {
  const classes = styles()
  return (
    <Paper
      elevation={3}
      style={{
        width: '1280px',
        maxWidth: '95%',
        margin: '10px auto',
        padding: '10px',
      }}
    >
      <div>
        <Typography className={classes.subTitle} align='center' variant='h6'>
          Order Status: {order?.orderStatus}
        </Typography>

        <Typography
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          className={classes.subTitle}
          variant='h6'
        >
          Payment Status:{' '}
          {order?.isPaid === true ? (
            <CheckIcon
              style={{ color: 'green', fontSize: '30px', marginLeft: '10px' }}
            />
          ) : (
            <ClearIcon
              style={{ color: 'red', fontSize: '30px', marginLeft: '10px' }}
            />
          )}
        </Typography>
      </div>

      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography className={classes.subTitle} align='center' variant='h6'>
            User Details:
          </Typography>

          <p style={{ textAlign: 'center' }}>Name: {order?.userInfo?.name}</p>
          <p style={{ textAlign: 'center' }}>Email: {order?.userInfo?.email}</p>
          <p style={{ textAlign: 'center' }}>Phone: {order?.userInfo?.phone}</p>

          <Typography className={classes.subTitle} align='center' variant='h6'>
            Delivery Details:
          </Typography>

          <p style={{ textAlign: 'center' }}>
            Country: {order?.userInfo?.country}
          </p>
          <p style={{ textAlign: 'center' }}>city: {order?.userInfo?.city}</p>
          <p style={{ textAlign: 'center' }}>
            zipCode: {order?.userInfo?.zipCode}
          </p>
          <p style={{ textAlign: 'center' }}>
            street: {order?.userInfo?.street}
          </p>
          <p style={{ textAlign: 'center' }}>
            Home number: {order?.userInfo?.homeNumber}
          </p>
          <p style={{ textAlign: 'center' }}>
            Apartment number: {order?.userInfo?.apartment}
          </p>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography className={classes.subTitle} align='center' variant='h6'>
            Products:
          </Typography>

          {order?.products.map((product, i) => (
            <p style={{ textAlign: 'center' }} key={i}>
              {product.product.name} X {product.count}
            </p>
          ))}

          <Typography className={classes.subTitle} align='center' variant='h6'>
            Payment:
          </Typography>

          <p style={{ textAlign: 'center' }}>
            Payment Method:{' '}
            {order?.paymentMethod === 'bank'
              ? 'Bank transfer'
              : order?.paymentMethod === 'phone'
              ? 'Phone payment'
              : 'Paypal'}
          </p>
          <p style={{ textAlign: 'center' }}>
            Payment fee: {order?.paymentMethod === 'paypal' ? '+ 5%' : 'No fee'}
          </p>

          <Typography className={classes.subTitle} align='center' variant='h6'>
            Delivery:
          </Typography>

          <p style={{ textAlign: 'center' }}>
            Delivery Option:{' '}
            {order?.deliveryOption === 'regular'
              ? 'Regular, registered with tracking number'
              : order?.deliveryOption === 'boxit'
              ? 'Boxit'
              : order?.deliveryOption === 'express'
              ? 'Express delivery'
              : 'Self pickup'}
          </p>
          <p style={{ textAlign: 'center' }}>
            Delivery price:{' '}
            {order?.deliveryOption === 'regular'
              ? '16 ₪'
              : order?.deliveryOption === 'boxit'
              ? '26 ₪'
              : order?.deliveryOption === 'express'
              ? '59 ₪'
              : 'Free'}
          </p>

          <Typography className={classes.subTitle} align='center' variant='h6'>
            Total: {order?.cartTotal} ₪
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Order
