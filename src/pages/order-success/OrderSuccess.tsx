import styles from './styles'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { clearState } from '../../redux/reducers/orderSlice'
import Header from './components/Header'
import OrderSuccessGrid from './components/OrderSuccessGrid'
import { order as getOrder } from '../../redux/actions/order'
import { RootState } from '../../redux/store'
import { Typography } from '@material-ui/core'
import Order from './components/Order'

const OrderSuccess = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const params: Params = useParams()
  const { id } = params

  const { order } = useSelector((state: RootState) => state.order)

  const handleClear = () => {
    dispatch(clearState())
  }

  const handleLoadeOrder = () => {
    dispatch(getOrder(id))
  }
  useEffect(() => {
    handleLoadeOrder()
    return () => handleClear()
  }, [])

  type Params = {
    id: string
  }

  return (
    <div className={classes.mainContainer}>
      <Header />
      <OrderSuccessGrid order={order} />

      <Order order={order} />
    </div>
  )
}

export default OrderSuccess
