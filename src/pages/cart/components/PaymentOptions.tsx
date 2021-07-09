import {
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core'
import styles from '../styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { setPaymentMethod } from '../../../redux/reducers/cartSlice'

const PaymentOptions = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { paymentMethod } = useSelector((state: RootState) => state.cart)

  return (
    <div className={classes.optionsSection}>
      <Typography align='center' variant='h5'>
        Payment Options
      </Typography>

      <div className={classes.optionsSection}>
        <FormControl component='fieldset'>
          <RadioGroup value={paymentMethod} aria-label='delivery'>
            <FormControlLabel
              value='bank'
              control={
                <Radio
                  onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
                />
              }
              label='Direct bank transfer'
            />
            <FormControlLabel
              value='phone'
              control={
                <Radio
                  onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
                />
              }
              label='Pay by phone (credit card, bit or any other)'
            />
            <FormControlLabel
              value='paypal'
              control={
                <Radio
                  onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
                />
              }
              label='PayPal (+5% to total price)'
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  )
}

export default PaymentOptions
