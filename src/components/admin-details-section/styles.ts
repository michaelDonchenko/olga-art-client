import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  mainContainer: {
    display: 'flex',
    padding: '10px',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'center',
  },

  title: {
    color: 'grayText',
    margin: '10px 0',
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    maxWidth: '95%',
  },

  formElement: {
    width: '250px',
    maxWidth: '95%',
    margin: '10px auto',
  },

  spanStyle: {
    fontSize: '18px',
    margin: '10px',
    fontWeight: 600,
    '&:hover': {
      cursor: 'pointer',
      color: '#FF69B4',
    },
  },
})

export default styles
