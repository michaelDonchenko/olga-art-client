import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  header: {
    margin: '15px 0',
  },

  appLink: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#181818',
    fontSize: '22px',
    fontWeight: 500,
    textDecoration: 'none',
    padding: '0 3px',
    textAlign: 'center',
    margin: '10px auto',
    width: '250px',
    maxWidth: '95%',
    border: '1px solid white',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#D3D3D3',
    },
  },
  navigationLink: {
    color: '#181818',
    alignItems: 'center',
    display: 'flex',
    fontSize: '28px',
    fontWeight: 500,
    textDecoration: 'none',
    margin: '15px 0',
    padding: '2px 10px',
  },

  appIcon: {
    fontSize: '26px',
    marginRight: '10px',
  },

  icon: {
    marginRight: '5px',
  },
})

export default styles
