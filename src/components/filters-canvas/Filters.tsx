import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@material-ui/core'
import { Paper } from '@material-ui/core'
import { useEffect } from 'react'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { categories as GetCategories } from '../../redux/actions/categories'
import {
  setCategory,
  setProductToDisplay,
  setSort,
} from '../../redux/reducers/productSlice'

const Filters = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { queryObj } = useSelector((state: RootState) => state.product)
  const { categories, loading } = useSelector(
    (state: RootState) => state.category
  )

  useEffect(() => {
    dispatch(GetCategories())
  }, [])

  return (
    <main className={classes.main}>
      <Paper elevation={3} className={classes.FiltersContainer}>
        <FormControl className={classes.textField}>
          <InputLabel id='category'>Categories</InputLabel>
          <Select
            value={queryObj.category ? queryObj.category : 'all'}
            name='category'
            labelId='category'
            onChange={(e) =>
              dispatch(
                setCategory(e.target.value === 'all' ? '' : e.target.value)
              )
            }
          >
            <MenuItem disabled>Select Category</MenuItem>
            <MenuItem value={'all'}>All Products (Default)</MenuItem>
            {!loading &&
              categories.map((c, i) => (
                <MenuItem key={i} value={c._id}>
                  {c.name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>

        <FormControl className={classes.textField}>
          <InputLabel id='sort'>Sort By</InputLabel>
          <Select
            onChange={(e) => dispatch(setSort(e.target.value))}
            value={queryObj.sort}
            name='sort'
            labelId='sort'
          >
            <MenuItem disabled>Select Sorting</MenuItem>
            <MenuItem value='createdAt'>Newest Products (Default)</MenuItem>
            <MenuItem value='high price'>Highest Price</MenuItem>
            <MenuItem value='low price'>Lowest Price</MenuItem>
            <MenuItem value='sold'>Best Sellers</MenuItem>
          </Select>
        </FormControl>

        <div className={classes.radioButtonsContainer}>
          <h5>Display:</h5>
          <RadioGroup
            value={queryObj.productsToDisplay}
            onChange={(e) => dispatch(setProductToDisplay(e.target.value))}
            aria-label='display'
            name='display'
          >
            <div className={classes.radiosDiv}>
              <FormControlLabel
                value='all'
                control={<Radio />}
                label='All Products'
              />
              <FormControlLabel
                value='inStock'
                control={<Radio />}
                label='In Stock'
              />
              <FormControlLabel
                value='outStock'
                control={<Radio />}
                label='Out of Stock'
              />
            </div>
          </RadioGroup>
        </div>
      </Paper>
    </main>
  )
}

export default Filters
