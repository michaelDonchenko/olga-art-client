import styles from './styles'
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableBody,
} from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { Button } from '@material-ui/core'
import { setCart } from '../../redux/reducers/cartSlice'
import DeleteIcon from '@material-ui/icons/Delete'

interface Product {
  _id: string
  name: string
  category: {
    _id: string
    name: string
  }
  price: number
  quantity: number
  sold: number
  description: string
  count: number
}

const CartTable = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { products } = useSelector((state: RootState) => state.cart)

  const handleRemove = (product: Product) => {
    const filtered = products?.filter((item) => item._id !== product._id)

    if (!filtered?.length) {
      window.localStorage.removeItem('cart')
      dispatch(setCart(null))
    } else {
      window.localStorage.setItem('cart', JSON.stringify(filtered))
      dispatch(setCart(filtered))
    }
  }

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((p, i) => (
            <TableRow key={i}>
              <TableCell>
                {!p.images?.length ? (
                  'No yet images'
                ) : (
                  <img
                    className={classes.image}
                    src={p.images[0].url}
                    alt='error'
                  />
                )}
              </TableCell>
              <TableCell>{p.name}</TableCell>
              <TableCell>{p.category.name}</TableCell>
              <TableCell>{p.price}₪</TableCell>
              <TableCell>{p.count}</TableCell>
              <TableCell>
                <Button
                  className={classes.deleteButton}
                  startIcon={<DeleteIcon />}
                  onClick={(e) => handleRemove(p)}
                  variant='contained'
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CartTable
