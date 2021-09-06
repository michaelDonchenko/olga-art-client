import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  linkSpan: {
    color: '#FF69B4',
    cursor: 'pointer',
    margin: '0 7px',
  },

  title: {
    margin: '20px 0',
  },

  name: {
    fontWeight: 600,
  },

  flexCenterDiv: {
    display: 'flex',
    justifyContent: 'center',
  },

  flexStartDiv: {
    display: 'flex',
  },

  image: {
    width: '150px',
    margin: '15px 10px',
    maxWidth: '40%',
  },
})

export default styles
