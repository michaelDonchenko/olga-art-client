import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../../redux/reducers/productSlice'
import { RootState } from '../../redux/store'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    alignItems: 'center',
    margin: '10px 0',
  },
}))

export default function PaginationControll() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { page, pages } = useSelector((state: RootState) => state.product)

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value))
  }

  return (
    <div className={classes.root}>
      <Pagination count={pages} page={page} onChange={handleChange} />
    </div>
  )
}
