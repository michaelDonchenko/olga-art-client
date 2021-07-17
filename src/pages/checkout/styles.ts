import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  mainContainer: {
    margin: '30px 0',
    width: '100%',
  },

  mainTitle: {
    marginBottom: '30px',
  },

  subTitle: {
    padding: '10px',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '10px 5px',
    width: '100%',
  },

  formElement: {
    margin: '10px',
    width: '350px',
    maxWidth: '95%',
    display: 'flex',
    alignSelf: 'center',
  },

  numberElement: {
    width: '165px',
    margin: '10px',
    maxWidth: '95%',
    display: 'flex',
    alignSelf: 'center',
  },

  checkoutButton: {
    margin: '25px auto',
    maxWidth: '100%',
    width: '350px',
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: 'green',
    fontSize: '16px',
    color: 'white',
    '&:hover': {
      backgroundColor: 'forestGreen',
    },
  },

  flexColumnDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10px 5px',
    width: '100%',
  },

  messageDiv: {
    margin: '5px auto',
    width: '600px',
    maxWidth: '95%',
  },
})

export default styles
