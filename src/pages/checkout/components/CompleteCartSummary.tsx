import styles from '../styles'
import { useSelector } from 'react-redux'
import { Grid, Paper, Typography } from '@material-ui/core'
import { RootState } from '../../../redux/store'
import Loader from '../../../components/loader'

const CompleteCartSummary = () => {
  const classes = styles()

  const { user, loading: authLoading } = useSelector(
    (state: RootState) => state.auth
  )
  const { cartFromDb, loading } = useSelector((state: RootState) => state.cart)

  return (
    <>
      {loading || authLoading ? (
        <Loader />
      ) : (
        <Paper
          elevation={3}
          style={{
            width: '1280px',
            maxWidth: '95%',
            margin: '10px auto',
            padding: '10px',
          }}
        >
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography
                className={classes.subTitle}
                align='center'
                variant='h6'
              >
                User Details:
              </Typography>

              <p style={{ textAlign: 'center' }}>
                Name: {user?.userInfo?.name}
              </p>
              <p style={{ textAlign: 'center' }}>
                Email: {user?.userInfo?.email}
              </p>
              <p style={{ textAlign: 'center' }}>
                Phone: {user?.userInfo?.phone}
              </p>

              <Typography
                className={classes.subTitle}
                align='center'
                variant='h6'
              >
                Delivery Details:
              </Typography>

              <p style={{ textAlign: 'center' }}>
                Country: {user?.userInfo?.country}
              </p>
              <p style={{ textAlign: 'center' }}>
                city: {user?.userInfo?.city}
              </p>
              <p style={{ textAlign: 'center' }}>
                zipCode: {user?.userInfo?.zipCode}
              </p>
              <p style={{ textAlign: 'center' }}>
                street: {user?.userInfo?.street}
              </p>
              <p style={{ textAlign: 'center' }}>
                Home number: {user?.userInfo?.homeNumber}
              </p>
              <p style={{ textAlign: 'center' }}>
                Apartment number: {user?.userInfo?.apartment}
              </p>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                className={classes.subTitle}
                align='center'
                variant='h6'
              >
                Products:
              </Typography>

              {cartFromDb?.products.map((product, i) => (
                <p style={{ textAlign: 'center' }} key={i}>
                  {product.product.name} X {product.count}
                </p>
              ))}

              <Typography
                className={classes.subTitle}
                align='center'
                variant='h6'
              >
                Payment:
              </Typography>

              <p style={{ textAlign: 'center' }}>
                Payment Method:{' '}
                {cartFromDb?.paymentMethod === 'bank'
                  ? 'Bank transfer'
                  : cartFromDb?.paymentMethod === 'phone'
                  ? 'Phone payment'
                  : 'Paypal'}
              </p>
              <p style={{ textAlign: 'center' }}>
                Payment fee:{' '}
                {cartFromDb?.paymentMethod === 'paypal' ? '+ 5%' : 'No fee'}
              </p>

              <Typography
                className={classes.subTitle}
                align='center'
                variant='h6'
              >
                Delivery:
              </Typography>

              <p style={{ textAlign: 'center' }}>
                Delivery Option:{' '}
                {cartFromDb?.deliveryOption === 'regular'
                  ? 'Regular, registered with tracking number'
                  : cartFromDb?.deliveryOption === 'boxit'
                  ? 'Boxit'
                  : cartFromDb?.deliveryOption === 'express'
                  ? 'Express delivery'
                  : 'Self pickup'}
              </p>
              <p style={{ textAlign: 'center' }}>
                Delivery price:{' '}
                {cartFromDb?.deliveryOption === 'regular'
                  ? '16 ₪'
                  : cartFromDb?.deliveryOption === 'boxit'
                  ? '26 ₪'
                  : cartFromDb?.deliveryOption === 'express'
                  ? '59 ₪'
                  : 'Free'}
              </p>

              <Typography
                className={classes.subTitle}
                align='center'
                variant='h6'
              >
                Cart Total: {cartFromDb?.cartTotal} ₪
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  )
}

export default CompleteCartSummary
