import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  container: {
    height: 500,
    padding: '10px',
    width: '100%',
    overflowY: 'scroll',
  },

  title: {
    color: 'grayText',
    margin: '10px 0',
  },

  message: {
    margin: '15px 0 ',
    padding: '10px',
  },
})

export default styles
