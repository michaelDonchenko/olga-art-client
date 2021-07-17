import styles from './styles'
import UserSidenav from '../../components/user-sidenav/UserSidenav'
import { Hidden } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useParams } from 'react-router'
import Order from '../order-success/components/Order'
import { useEffect } from 'react'
import { order as getOrder } from '../../redux/actions/order'
import Loader from '../../components/loader'

type Params = {
  id: string
}

const UserOrder = () => {
  const classes = styles()
  const params: Params = useParams()
  const { id } = params
  const dispatch = useDispatch()

  const { order, loading } = useSelector((state: RootState) => state.order)

  useEffect(() => {
    dispatch(getOrder(id))
  }, [])

  return (
    <div className={classes.mainContainer}>
      <Hidden xsDown>
        <UserSidenav />
      </Hidden>

      <div className={classes.contentDiv}>
        <Typography className={classes.mainHeader} variant='h5' align='center'>
          Your Order
        </Typography>

        {loading ? <Loader /> : <Order order={order} />}
      </div>
    </div>
  )
}

export default UserOrder
