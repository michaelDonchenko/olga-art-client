import { useEffect } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'
import moment from 'moment'
import { useState } from 'react'
import { getOrders } from '../../redux/api/order'
import { Order } from '../../redux/reducers/orderSlice'
import Loader from '../loader'

const AdminGraph = () => {
  const [orders, setOrders] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const loadData = async () => {
    setLoading(true)
    try {
      const { data } = await getOrders(1, 1)

      type AllOrders = any[]
      let allOrders: AllOrders = []
      let totalSum = 0

      if (data.pages > 1) {
        for (let i = 1; i < data.pages + 1; i++) {
          const res = await getOrders(i, 1)
          res.data.orders.forEach((order: Order) =>
            allOrders.push({
              value: order.cartTotal,
              date: moment(order.createdAt).format('MMM Do YY'),
              total: (totalSum += order.cartTotal),
            })
          )
        }

        setLoading(false)
        return setOrders(allOrders)
      }

      data.orders.forEach((order: Order) =>
        allOrders.push({
          value: order.cartTotal,
          date: moment(order.createdAt).format('MMM Do YY'),
          total: (totalSum += order.cartTotal),
        })
      )
      setLoading(false)
      return setOrders(allOrders)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '30px',
      }}
    >
      {loading && <Loader />}
      {!loading && orders.length === 0 ? (
        <p style={{ textAlign: 'center', margin: '20px', fontSize: '18px' }}>
          No Orders to display...
        </p>
      ) : (
        <LineChart
          width={900}
          height={400}
          data={orders}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='total'
            stroke='#8884d8'
            activeDot={{ r: 8 }}
          />
          <Line type='monotone' dataKey='value' stroke='#82ca9d' />
        </LineChart>
      )}
    </div>
  )
}

export default AdminGraph
