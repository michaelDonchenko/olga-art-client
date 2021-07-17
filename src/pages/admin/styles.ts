import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  mainContainer: {
    width: '100%',
    display: 'flex',
    maxWidth: '100%',
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
    margin: '15px 0',
  },

  successText: { textAlign: 'center', color: 'green' },
  errorText: { textAlign: 'center', color: 'crimson' },
})

export default styles
