import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  mainContainer: {
    width: '500px',
    maxWidth: '95%',
    margin: '30px auto',
    minHeight: '500px',
    height: 'fit-content',
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
    position: 'absolute',
    bottom: '0',
  },

  linkSpan: {
    color: '#20B2AA',
    cursor: 'pointer',
    margin: '0 4px',
  },

  title: {
    textAlign: 'center',
    margin: '15px 0',
  },
})

export default styles
