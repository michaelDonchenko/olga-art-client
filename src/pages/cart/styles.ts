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
    marginBottom: '30px',
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
    fontSize: '16px',
  },
})

export default styles
