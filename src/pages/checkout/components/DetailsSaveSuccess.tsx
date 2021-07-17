import styles from '../styles'
import { Alert } from '@material-ui/lab'
import CompleteCartSummary from './CompleteCartSummary'
import { Typography, Button } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { successReset } from '../../../redux/reducers/authSlice'
import { create } from '../../../redux/actions/order'
import { RootState } from '../../../redux/store'
import { useHistory } from 'react-router'
import { resetCart } from '../../../redux/reducers/cartSlice'

const DetailsSaveSuccess = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const history = useHistory()
  const { createdOrderId, success } = useSelector(
    (state: RootState) => state.order
  )

  const handleSuccessReset = () => {
    dispatch(successReset())
  }

  const handleCreateOrder = () => {
    dispatch(create())
  }

  if (createdOrderId && success) {
    dispatch(resetCart())
    localStorage.removeItem('cart')

    history.push(`/order-success/${createdOrderId}`)
  }

  useEffect(() => {
    return () => handleSuccessReset()
  }, [])

  return (
    <div className={classes.flexColumnDiv}>
      <div className={classes.messageDiv}>
        <Alert severity='success' style={{ fontSize: '16px' }}>
          Your information is succefully saved, you can now create your order.
        </Alert>
      </div>

      <div className={classes.messageDiv}>
        <Alert severity='info'>
          Please Note: <br></br> After you click on create order, your order
          will be sent to the admin and you will not be able to change the
          details anymore. Make sure eveything is correct and if needed you can
          go back now and change it.
        </Alert>
      </div>

      <Button
        onClick={handleCreateOrder}
        variant='contained'
        className={classes.checkoutButton}
      >
        Finish and create order
      </Button>
      <Typography align='center' variant='h5' className={classes.subTitle}>
        Your order preview
      </Typography>
      <CompleteCartSummary />
    </div>
  )
}

export default DetailsSaveSuccess
