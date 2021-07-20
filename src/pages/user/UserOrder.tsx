import styles from './styles'
import UserSidenav from '../../components/user-sidenav/UserSidenav'
import { Hidden } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useParams } from 'react-router'
import Order from '../order-success/components/Order'
import { useEffect, useState } from 'react'
import { order as getOrder } from '../../redux/actions/order'
import Loader from '../../components/loader'
import OrderSuccessGrid from '../order-success/components/OrderSuccessGrid'

type Params = {
  id: string
}

const UserOrder = () => {
  const classes = styles()
  const params: Params = useParams()
  const { id } = params
  const dispatch = useDispatch()
  const [sdk, setSdk] = useState(false)

  const { order, loading } = useSelector((state: RootState) => state.order)

  useEffect(() => {
    dispatch(getOrder(id))
  }, [])

  useEffect(() => {
    addPaypalScript()
  }, [])

  const addPaypalScript = async () => {
    try {
      // const { data: clientId } = await getPaypalClientId(user.token)
      const script = document.createElement('script')

      script.type = 'text/javascript'
      script.src = `https://www.paypal.com/sdk/js?client-id=AVZshg85dcH_q42PUKuBwCNMVlrZ695CFMluaolGq5OLhnj1VbZauhIvJGpOkZJu7nqpeMgyjhn15puV&currency=ILS`
      script.async = true
      script.onload = () => {
        setSdk(true)
      }
      document.body.appendChild(script)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.mainContainer}>
      <Hidden xsDown>
        <UserSidenav />
      </Hidden>

      <div className={classes.contentDiv}>
        <Typography className={classes.mainHeader} variant='h5' align='center'>
          Your Order
        </Typography>

        <OrderSuccessGrid order={order} sdk={sdk} />
        {loading ? <Loader /> : <Order order={order} />}
      </div>
    </div>
  )
}

export default UserOrder
