import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  appBar: {
    backgroundColor: '#20B2AA',
  },

  tooBar: {
    width: '1280px',
    maxWidth: '100%',
    margin: '0 auto',
  },

  appLink: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 500,
    textDecoration: 'none',
    marginRight: '20px',
    padding: '0 3px',
    borderBottom: '2px solid #20B2AA',
    '&:hover': {
      borderBottom: '2px solid white',
    },
  },

  appIcon: {
    fontSize: '26px',
    marginRight: '5px',
  },

  flex1: {
    flexGrow: 1,
    display: 'flex',
  },
})

export default styles
