import {
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core'
import styles from '../styles'

const PaymentOptions = () => {
  const classes = styles()

  return (
    <div className={classes.optionsSection}>
      <Typography align='center' variant='h5'>
        Payment Options
      </Typography>

      <div className={classes.optionsSection}>
        <FormControl component='fieldset'>
          <RadioGroup aria-label='delivery'>
            <FormControlLabel
              value='0'
              control={<Radio />}
              label='Direct bank transfer'
            />
            <FormControlLabel
              value='1'
              control={<Radio />}
              label='Pay by phone (credit card, bit or any other)'
            />
            <FormControlLabel
              value='2'
              control={<Radio />}
              label='PayPal (+5% to total price)'
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  )
}

export default PaymentOptions
