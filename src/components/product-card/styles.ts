import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  root: {
    width: 350,
    maxWidth: '95%',
    height: 'fit-content',
    backgroundColor: 'white',
    boxShadow: '',
    margin: '15px 10px',
    border: '1px solid ',
    borderColor: '#e1f5fe',
    '&:hover': {
      boxShadow:
        'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
    },
  },

  productName: {
    padding: '7px',
    cursor: 'pointer',
  },

  link: {
    textDecoration: 'none',
    color: 'black',
  },

  button: {
    width: '95%',
    maxWidth: '250px',
    margin: '7px auto',
  },

  productInfo: {
    padding: '5px',
    margin: '2px 0',
  },

  productSpan: {
    fontWeight: 600,
    marginLeft: '7px',
    color: 'black',
  },

  inStockSpan: {
    fontWeight: 600,
    marginLeft: '7px',
    color: 'green',
  },

  outStockSpan: {
    fontWeight: 600,
    marginLeft: '7px',
    color: 'crimson',
  },

  text: {
    color: 'grayText',
    fontSize: '16px',
    textAlign: 'center',
  },

  productLink: {
    cursor: 'pointer',
  },
})

export default styles
