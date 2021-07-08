import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
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

  logout: {},

  icon: {
    marginRight: '5px',
  },
})

export default styles
