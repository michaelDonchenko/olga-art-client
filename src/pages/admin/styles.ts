import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  mainContainer: {
    width: '100%',
    display: 'flex',
  },

  contentDiv: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },

  mainHeader: {
    margin: '15px 0',
  },

  successText: { textAlign: 'center', color: 'green' },
  errorText: { textAlign: 'center', color: 'crimson' },
})

export default styles
