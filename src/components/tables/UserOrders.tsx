import styles from './styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Loader from '../loader'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { userOrders } from '../../redux/actions/order'
import { setPage } from '../../redux/reducers/orderSlice'
import moment from 'moment'
import PaginationControll from '../pagination/PaginationControll'
import { useHistory } from 'react-router'

const UserOrders = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const history = useHistory()

  const { loading, orders, pages, page } = useSelector(
    (state: RootState) => state.order
  )

  const handleClick = (id: string) => {
    history.push(`/user/order/${id}`)
  }

  useEffect(() => {
    dispatch(userOrders(page))
  }, [page])

  return (
    <>
      {loading && <Loader />}
      {!loading && !orders && <p>No orders found.</p>}
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Created Date</TableCell>
              <TableCell>Order Status</TableCell>
              <TableCell>Is Paid</TableCell>
              <TableCell>Payment method</TableCell>
              <TableCell>Total price</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders?.map((order, i) => (
              <TableRow key={i}>
                <TableCell>
                  {moment(order.createdAt).format('MMM Do YY')}
                </TableCell>
                <TableCell>{order.orderStatus}</TableCell>
                <TableCell>
                  {order.isPaid === true ? (
                    <span style={{ color: 'green' }}>Yes</span>
                  ) : (
                    <span style={{ color: 'red' }}>No</span>
                  )}
                </TableCell>

                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell>{order.cartTotal} ₪</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleClick(order._id)}
                    style={{ minWidth: '150px' }}
                    variant='outlined'
                    color='primary'
                  >
                    View Full details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {!loading && pages > 1 && (
        <div>
          <PaginationControll page={page} pages={pages} setPage={setPage} />
        </div>
      )}
    </>
  )
}

export default UserOrders
