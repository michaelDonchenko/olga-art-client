import { useState } from 'react'
import styles from './styles'
import { TextField, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { categories, create } from '../../redux/actions/categories'
import { resetSuccessMessage } from '../../redux/reducers/categoriesSlice'
import { RootState } from '../../redux/store'

const CreateCategoryForm = () => {
  const classes = styles()
  const [category, setCategory] = useState('')
  const dispatch = useDispatch()
  const { successMessage } = useSelector((state: RootState) => state.category)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(create(category))
  }

  const handleCategoriesReload = () => {
    if (successMessage) {
      dispatch(resetSuccessMessage())
      dispatch(categories())
      setCategory('')
    }
  }

  return (
    <form className={classes.formContainer} onSubmit={handleSubmit}>
      <TextField
        className={classes.formElement}
        label='Category'
        name='category'
        type='text'
        required={true}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <Button
        className={classes.formElement}
        type='submit'
        variant='contained'
        color='primary'
      >
        Create Category
      </Button>

      {handleCategoriesReload()}
    </form>
  )
}

export default CreateCategoryForm
