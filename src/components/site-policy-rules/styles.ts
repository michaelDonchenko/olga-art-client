import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '25px',
  },

  title: {
    textAlign: 'center',
    margin: '10px 0',
  },

  button: {
    fontSize: '16px',
    width: '350px',
    maxWidth: '95%',
    margin: '10px auto',
  },
})

export default styles
