import styles from './styles'
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableBody,
  TextField,
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

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    p: Product
  ) => {
    let cart = localStorage.getItem('cart')
    let parsedCart: any[] = []

    if (typeof cart === 'string') {
      parsedCart = JSON.parse(cart)
    }

    parsedCart.map((product, i) => {
      if (product._id === p._id) {
        parsedCart[i].count = Number(e.target.value)

        if (parsedCart[i].count > p.quantity) {
          return //count cannot be bigger than quantity
        }

        if (parsedCart[i].count < 1) {
          return //count cannt be less than 1
        }

        localStorage.setItem('cart', JSON.stringify(parsedCart))

        dispatch(setCart(parsedCart))
      }
    })
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
              <TableCell>
                <TextField
                  onChange={(e) => handleChange(e, p)}
                  value={p.count}
                  type='number'
                ></TextField>
              </TableCell>
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
