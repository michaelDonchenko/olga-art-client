import styles from './styles'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { clearState } from '../../redux/reducers/orderSlice'
import Header from './components/Header'
import OrderSuccessGrid from './components/OrderSuccessGrid'
import { order as getOrder } from '../../redux/actions/order'
import { RootState } from '../../redux/store'
import Order from './components/Order'

const OrderSuccess = () => {
  type Params = {
    id: string
  }

  const classes = styles()
  const dispatch = useDispatch()
  const params: Params = useParams()
  const { id } = params

  const [sdk, setSdk] = useState(false)

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
      <Header />
      <OrderSuccessGrid order={order} sdk={sdk} />

      <Order order={order} />
    </div>
  )
}

export default OrderSuccess
