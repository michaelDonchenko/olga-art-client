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
    padding: '10px 5px',
  },

  formElement: {
    margin: '10px 0',
    width: '300px',
    maxWidth: '95%',
    display: 'flex',
    alignSelf: 'center',
  },

  categoriesDiv: {
    height: '300px',
    overflowY: 'scroll',
    padding: '10px 5px',
  },

  ol: {
    maxWidth: '95%',
    margin: '10px 0',
  },

  li: {
    fontSize: '20px',
    margin: '10px 0',
  },

  deleteIcon: {
    color: '#FF69B4',
    '&:hover': {
      cursor: 'pointer',
    },
  },

  updateIcon: {
    color: '#20B2AA',
    '&:hover': {
      cursor: 'pointer',
    },
  },
})

export default styles
