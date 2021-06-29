import { Button } from '@material-ui/core'
import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { categories as getCategories } from '../../redux/actions/categories'
import Loader from '../loader'
import { useHistory } from 'react-router'
import { setCategory } from '../../redux/reducers/productSlice'

const Categories = () => {
  const classes = styles()
  const { categories, loading } = useSelector(
    (state: RootState) => state.category
  )
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  type Category = {
    _id: string
  }

  const handleClick = (category: Category) => {
    dispatch(setCategory(category._id))
    history.push('/shop')
  }

  return (
    <div className={classes.container}>
      {loading && <Loader />}
      {categories.length > 0 &&
        categories.map((c, i) => (
          <Button
            variant='outlined'
            onClick={() => handleClick(c)}
            key={i}
            className={classes.element}
            color='primary'
          >
            {c.name}
          </Button>
        ))}
    </div>
  )
}

export default Categories
