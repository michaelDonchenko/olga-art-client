import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'
import { useDispatch } from 'react-redux'

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

interface Props {
  page: number
  pages: number
  setPage: (value: number) => void
}

export default function PaginationControll({ page, pages, setPage }: Props) {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value))
  }

  return (
    <div className={classes.root}>
      <Pagination count={pages} page={page} onChange={handleChange} />
    </div>
  )
}
