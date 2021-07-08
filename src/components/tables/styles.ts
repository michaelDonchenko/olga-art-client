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
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'red',
    },
  },
})

export default styles
