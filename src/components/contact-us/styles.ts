import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  main: {
    display: 'flex',
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
  },

  mainContainer: {
    width: '450px',
    maxWidth: '100%',
    margin: '30px auto',
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
    width: '350px',
    maxWidth: '95%',
    display: 'flex',
    alignSelf: 'center',
    fontSize: '16px',
  },

  iconDiv: {
    fontSize: '50px',
    margin: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  myIcons: {
    color: '#424242',
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
  },

  flexDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  span: {
    fontSize: '18px',
    fontWeight: 600,
    marginLeft: '15px',
  },
})

export default styles
