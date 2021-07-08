import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  main: {
    display: 'flex',
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
  },

  image: {
    width: '100%',
  },

  aboutDiv: {
    padding: '10px',
    height: '400px',
    overflowY: 'scroll',
  },
})

export default styles
