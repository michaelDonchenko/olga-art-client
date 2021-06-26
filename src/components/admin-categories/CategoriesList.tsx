import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import UpdateIcon from '@material-ui/icons/Update'
import DeleteIcon from '@material-ui/icons/Delete'
import { removeCategory } from '../../redux/actions/categories'
import { placeCategoryToUpdate } from '../../redux/reducers/categoriesSlice'
import Loader from '../loader'

const CategoriesList = () => {
  const classes = styles()
  const { categories, loading } = useSelector(
    (state: RootState) => state.category
  )
  const dispatch = useDispatch()

  const openConfirm = (id: string) => {
    let result = window.confirm('Are you sure to delete this category?')
    if (result) {
      dispatch(removeCategory(id))
    }
  }

  const chooseCategoryToUpdate = (category: object) => {
    dispatch(placeCategoryToUpdate(category))
  }

  return (
    <div className={classes.categoriesDiv}>
      {loading && <Loader />}
      {!loading && categories.length > 0 && (
        <ol className={classes.ol}>
          {categories.map((c, i) => (
            <li key={i} className={classes.li}>
              {c.name}{' '}
              <span style={{ float: 'right' }}>
                <UpdateIcon
                  className={classes.updateIcon}
                  onClick={(e) => chooseCategoryToUpdate(c)}
                />{' '}
                <DeleteIcon
                  className={classes.deleteIcon}
                  onClick={(e) => openConfirm(c._id)}
                />{' '}
              </span>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default CategoriesList
