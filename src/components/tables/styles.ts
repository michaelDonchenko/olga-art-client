import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  table: {
    maxWidth: '98%',
    margin: '10px auto',
  },

  image: {
    height: '80px',
  },

  deleteButton: {
    color: 'white',
    backgroundColor: '#c62828',
    '&:hover': {
      backgroundColor: '#b71c1c',
    },
  },

  inStockSpan: {
    color: 'green',
    fontWeight: 'bold',
  },

  outStockSpan: {
    color: 'red',
    fontWeight: 'bold',
  },
})

export default styles
