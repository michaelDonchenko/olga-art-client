import { useState } from 'react'
import styles from './styles'
import { TextField, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { categories, putCategory } from '../../redux/actions/categories'
import {
  placeCategoryToUpdate,
  resetSuccessMessage,
} from '../../redux/reducers/categoriesSlice'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'

const UpdateCategoryForm = () => {
  const { successMessage, categoryToUpdate } = useSelector(
    (state: RootState) => state.category
  )
  const classes = styles()
  const [category, setCategory] = useState(categoryToUpdate?.name)
  const dispatch = useDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(
      putCategory({
        id: categoryToUpdate?._id,
        name: category,
      })
    )
  }

  const handleCategoriesReload = () => {
    if (successMessage) {
      dispatch(placeCategoryToUpdate(null))
      dispatch(resetSuccessMessage())
      dispatch(categories())
    }
  }

  const handleCancel = () => {
    dispatch(placeCategoryToUpdate(null))
  }

  useEffect(() => {
    setCategory(categoryToUpdate?.name)
  }, [categoryToUpdate?.name])

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
        Update Category
      </Button>
      <Button
        onClick={handleCancel}
        className={classes.formElement}
        variant='contained'
        color='secondary'
      >
        Cancel
      </Button>

      {handleCategoriesReload()}
    </form>
  )
}

export default UpdateCategoryForm
