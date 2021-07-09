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
import { setDelivey } from '../../../redux/reducers/cartSlice'

const DeliveryOptions = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { delivery } = useSelector((state: RootState) => state.cart)

  return (
    <div className={classes.optionsSection}>
      <Typography align='center' variant='h5'>
        Delivery Options
      </Typography>

      <div className={classes.optionsSection}>
        <FormControl component='fieldset'>
          <RadioGroup value={delivery} aria-label='delivery'>
            <FormControlLabel
              value='regular'
              control={
                <Radio onChange={(e) => dispatch(setDelivey(e.target.value))} />
              }
              label='Regular, registered with tracking number: ₪ 16'
            />
            <FormControlLabel
              value='boxit'
              control={
                <Radio onChange={(e) => dispatch(setDelivey(e.target.value))} />
              }
              label='Boxit: ₪ 26'
            />
            <FormControlLabel
              value='express'
              control={
                <Radio onChange={(e) => dispatch(setDelivey(e.target.value))} />
              }
              label='Express delivery (Two days delivery to your house, after the package is sent): ₪ 59'
            />
            <FormControlLabel
              value='self-pick'
              control={
                <Radio onChange={(e) => dispatch(setDelivey(e.target.value))} />
              }
              label='Self Pickup (Tel-Aviv Israel)'
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  )
}

export default DeliveryOptions
