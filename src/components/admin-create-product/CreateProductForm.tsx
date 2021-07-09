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
import { create } from '../../redux/actions/product'
import Loader from '../loader'

const CreateProductForm = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { categories, loading } = useSelector(
    (state: RootState) => state.category
  )

  interface valuesI {
    name: string
    price: number
    quantity: number
    description: string
    category: string | unknown
  }

  const [values, setValues] = useState<valuesI>({
    name: '',
    price: 0,
    quantity: 0,
    description: '',
    category: '',
  })

  const { name, price, quantity, description, category } = values
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(create(values))
  }

  useEffect(() => {
    dispatch(getCategories())
  }, [])

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
          rows={10}
          label={'Product Description'}
          name='description'
          type='text'
          variant='outlined'
          required={true}
          value={description}
          onChange={(e) => HandleChange(e, values, setValues)}
        />

        <Button
          type='submit'
          variant='contained'
          className={classes.formElement}
          color='primary'
        >
          Create Product
        </Button>
      </form>
    </>
  )
}

export default CreateProductForm
