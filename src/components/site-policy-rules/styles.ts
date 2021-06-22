import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '15vh',
  },

  title: {
    textAlign: 'center',
    margin: '10px 0',
  },

  button: {
    fontSize: '16px',
    width: '300px',
    maxWidth: '95%',
    margin: '10px auto',
  },
})

export default styles
