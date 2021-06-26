import styles from './styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { products as getProducts, remove } from '../../redux/actions/product'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router'
import Loader from '../loader'
import {
  Product,
  resetSuccessMessage,
  setProductToUpdate,
} from '../../redux/reducers/productSlice'

const ProductsTable = () => {
  const classes = styles()
  const history = useHistory()

  const { products, loading, successMessage } = useSelector(
    (state: RootState) => state.product
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const handleUpdateDetailsClick = (product: Product) => {
    dispatch(setProductToUpdate(product))
    history.push(`/admin/update-product/${product._id}`)
  }

  const handleDeleteProduct = (id: string) => {
    let response = window.confirm(
      'Are you sure you want to delete this product'
    )
    if (response) {
      dispatch(remove(id))
    }
  }

  if (successMessage === 'Product deleted succefully') {
    dispatch(resetSuccessMessage())
    dispatch(getProducts())
  }

  return (
    <>
      {loading && <Loader />}
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Category</TableCell>
              <TableCell align='right'>Main Image</TableCell>
              <TableCell align='right'>Update Details</TableCell>
              <TableCell align='right'>Update Images</TableCell>
              <TableCell align='right'>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.length > 0 &&
              products.map((p, i) => (
                <TableRow key={i}>
                  <TableCell align='right'>{p.name}</TableCell>
                  <TableCell align='right'>{p.category.name}</TableCell>
                  <TableCell align='right'>
                    {p.images.length ? (
                      <img
                        className={classes.image}
                        src={p.images[0].url}
                        alt={'Error'}
                      />
                    ) : (
                      'No images yet'
                    )}
                  </TableCell>
                  <TableCell align='right'>
                    <Button
                      onClick={() => handleUpdateDetailsClick(p)}
                      color='primary'
                      variant='outlined'
                    >
                      Update Details
                    </Button>
                  </TableCell>
                  <TableCell align='right'>
                    <Button
                      color='primary'
                      variant='outlined'
                      onClick={() =>
                        history.push(`/admin/upload-product-images/${p._id}`)
                      }
                    >
                      Update Images
                    </Button>
                  </TableCell>
                  <TableCell align='right'>
                    <Button
                      onClick={() => handleDeleteProduct(p._id)}
                      color='secondary'
                      variant='outlined'
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ProductsTable
