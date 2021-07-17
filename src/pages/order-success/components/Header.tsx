import { Typography, Grid } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import styles from '../styles'

const Header = () => {
  const classes = styles()
  return (
    <div>
      <Typography className={classes.mainHeader} align='center' variant='h5'>
        Your order has been created succefully
      </Typography>

      <Alert className={classes.infoAlert} severity='info'>
        Order that is not paid within 24h will be cancelled by the admin.
      </Alert>
      <Alert className={classes.infoAlert} severity='info'>
        Please note that you can see your order any time at your User Dashboard
      </Alert>
    </div>
  )
}

export default Header
