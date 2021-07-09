import {
  Typography,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core'
import styles from '../styles'

const DeliveryOptions = () => {
  const classes = styles()

  return (
    <div className={classes.optionsSection}>
      <Typography align='center' variant='h5'>
        Delivery Options
      </Typography>

      <div className={classes.optionsSection}>
        <FormControl component='fieldset'>
          <RadioGroup aria-label='delivery'>
            <FormControlLabel
              value={16}
              control={<Radio />}
              label='Regular, registered with tracking number: ₪ 16'
            />
            <FormControlLabel
              value={26}
              control={<Radio />}
              label='Boxit: ₪ 26'
            />
            <FormControlLabel
              value={59}
              control={<Radio />}
              label='Express delivery (Two days delivery to your house, after the package is sent): ₪ 59'
            />
            <FormControlLabel
              value={0}
              control={<Radio />}
              label='Self Pickup (Tel-Aviv Israel)'
            />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  )
}

export default DeliveryOptions
