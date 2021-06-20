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
import styles from './styles'

const Filters = () => {
  const classes = styles()
  return (
    <main className={classes.main}>
      <Paper elevation={3} className={classes.FiltersContainer}>
        <FormControl className={classes.textField}>
          <InputLabel id='category'>Choose Category</InputLabel>
          <Select name='category' labelId='category'>
            <MenuItem disabled>Select</MenuItem>
            <MenuItem value='tst'>Category1</MenuItem>
            <MenuItem value='tst2'>Category2</MenuItem>
            <MenuItem value='tst2'>Category2</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.textField}>
          <InputLabel id='sort'>Sort By</InputLabel>
          <Select name='sort' labelId='sort'>
            <MenuItem disabled>Select</MenuItem>
            <MenuItem value='tst'>Category1</MenuItem>
            <MenuItem value='tst2'>Category2</MenuItem>
            <MenuItem value='tst2'>Category2</MenuItem>
          </Select>
        </FormControl>

        <div className={classes.radioButtonsContainer}>
          <h5>Display:</h5>
          <RadioGroup aria-label='display' name='display'>
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
