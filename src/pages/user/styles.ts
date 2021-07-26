import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  mainContainer: {
    width: '100%',
    display: 'flex',
  },

  contentDiv: {
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    overflowX: 'auto',
    padding: '12px',
  },

  mainHeader: {
    margin: '10px 0',
  },
})

export default styles
