import styles from './styles'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { categories as getCategories } from '../../redux/actions/categories'
import { Button } from '@material-ui/core'
import { useState } from 'react'
import HandleChange from '../../hooks/HandleChange'
import Loader from '../loader'
import { useParams } from 'react-router'
import { Product, resetSuccessMessage } from '../../redux/reducers/productSlice'
import { useHistory } from 'react-router-dom'
import { update } from '../../redux/actions/product'
import ShowSuccess from '../../hooks/ShowSuccess'

interface valuesI {
  name: string
  price: number
  quantity: number
  description: string
  category: string | unknown
}

type Params = {
  id: string
}

const UpdateProductForm = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const history = useHistory()
  const { categories, loading } = useSelector(
    (state: RootState) => state.category
  )
  const { productToUpdate, successMessage } = useSelector(
    (state: RootState) => state.product
  )

  const params: Params = useParams()
  const { id } = params

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(update({ values, id }))
  }

  const handleResetMessage = () => {
    dispatch(resetSuccessMessage())
  }

  useEffect(() => {
    dispatch(getCategories())
    return () => handleResetMessage()
  }, [])

  const [values, setValues] = useState<valuesI>({
    name: (productToUpdate as Product).name,
    price: (productToUpdate as Product).price,
    quantity: (productToUpdate as Product).quantity,
    description: (productToUpdate as Product).description,
    category: '',
  })

  const { name, price, quantity, description, category } = values

  return (
    <>
      {loading && <Loader />}
      <form className={classes.formContainer} onSubmit={handleSubmit}>
        <TextField
          className={classes.formElement}
          label='Name'
          name='name'
          type='text'
          required={true}
          variant='outlined'
          value={name}
          onChange={(e) => HandleChange(e, values, setValues)}
        />
        <TextField
          className={classes.formElement}
          label='Price'
          name='price'
          type='number'
          variant='outlined'
          required={true}
          value={price}
          onChange={(e) => HandleChange(e, values, setValues)}
        />
        <TextField
          className={classes.formElement}
          label='Quantity'
          name='quantity'
          type='number'
          variant='outlined'
          required={true}
          value={quantity}
          onChange={(e) => HandleChange(e, values, setValues)}
        />

        <FormControl required className={classes.formElement}>
          <InputLabel id='category'>Select a Category</InputLabel>
          <Select
            required={true}
            name='category'
            labelId='category'
            onChange={(e) => setValues({ ...values, category: e.target.value })}
          >
            {!loading &&
              categories.length > 0 &&
              categories.map((c, i) => (
                <MenuItem value={c._id} key={i}>
                  {c.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <TextField
          className={classes.formElement}
          multiline
          rows={5}
          label={'Product Description'}
          name='description'
          type='text'
          variant='outlined'
          required={true}
          value={description}
          onChange={(e) => HandleChange(e, values, setValues)}
        />

        {successMessage && ShowSuccess(successMessage)}

        <Button
          type='submit'
          variant='contained'
          className={classes.formElement}
          color='primary'
        >
          Update Details
        </Button>
        <Button
          variant='outlined'
          className={classes.formElement}
          color='secondary'
          onClick={() => history.push('/admin/products')}
        >
          Back to Products
        </Button>
      </form>
    </>
  )
}

export default UpdateProductForm
