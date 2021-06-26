import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '10px 5px',
    width: '100%',
  },

  formElement: {
    margin: '12px',
    width: '350px',
    maxWidth: '95%',
    display: 'flex',
    alignSelf: 'center',
  },

  uploadImagesButton: {
    margin: '12px',
    width: '300px',
    maxWidth: '95%',
    display: 'flex',
    alignSelf: 'center',
  },

  uplaodImageContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '10px 5px',
    width: '100%',
  },

  title: {
    margin: '15px 0',
  },

  previewContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px 5px',
    width: '100%',
  },

  image: {
    height: '200px',
    margin: '10px',
    display: 'flex',
  },

  badge: {
    backgroundColor: 'crimson',
    color: 'white',
    fontWeight: 500,
    position: 'absolute',
    marginLeft: '3px',
    padding: '2px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
})

export default styles
