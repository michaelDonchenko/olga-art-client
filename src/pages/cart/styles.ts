import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  mainContainer: {
    margin: '30px 0',
    width: '100%',
  },

  titleIcon: {
    fontSize: '34px',
    marginLeft: '10px',
  },

  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px',
    color: 'gray',
  },

  gridItem: {
    padding: '7px',
  },

  link: {
    textDecoration: 'none',
    color: '#FF69B4',
  },

  optionsSection: {
    margin: '20px 0 10px 0',
    padding: '10px',
  },

  cartSummary: {
    padding: '10px 15px',
  },

  paragraph: {
    padding: '2px 5px',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  checkoutButton: {
    margin: '25px auto',
    maxWidth: '100%',
    width: '300px',
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: 'green',
    fontSize: '16px',
    color: 'white',
    '&:hover': {
      backgroundColor: 'forestGreen',
    },
  },
})

export default styles
