import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  mainContainer: {
    width: '500px',
    maxWidth: '95%',
    margin: '30px auto',
    minHeight: '500px',

    padding: '10px',
    position: 'relative',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  formElement: {
    margin: '18px 0',
    width: '300px',
    maxWidth: '95%',
    display: 'flex',
    alignSelf: 'center',
    fontSize: '16px',
  },

  footerDiv: {
    marginTop: '30px',
  },

  linkSpan: {
    color: '#FF69B4',
    cursor: 'pointer',
    margin: '0 4px',
  },

  title: {
    textAlign: 'center',
    margin: '15px 0',
  },

  text: {
    textAlign: 'center',
    padding: '10px',
  },
})

export default styles
