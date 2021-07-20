import { Hidden, Typography } from '@material-ui/core'
import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Loader from '../../components/loader'
import Order from '../order-success/components/Order'
import { order as getOrder } from '../../redux/actions/order'
import { useParams } from 'react-router'
import UpdateOrderSection from '../../components/update-order/UpdateOrderSection'

type Params = {
  id: string
}

const AdminOrder = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { order, loading } = useSelector((state: RootState) => state.order)
  const params: Params = useParams()
  const { id } = params

  useEffect(() => {
    dispatch(getOrder(id))
  }, [])

  return (
    <div className={classes.mainContainer}>
      <Hidden xsDown>
        <AdminSidenav />
      </Hidden>

      {/* content div */}
      <div className={classes.contentDiv}>
        {loading && <Loader />}
        {order && (
          <>
            <Typography
              align='center'
              variant='h5'
              className={classes.mainHeader}
            >
              Order Status
            </Typography>

            <UpdateOrderSection />
            <Order order={order} />
          </>
        )}
      </div>
    </div>
  )
}

export default AdminOrder
