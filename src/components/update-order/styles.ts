import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  flexDiv: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },

  formDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px',
  },

  formElement: {
    margin: '15px',
    width: '300px',
    maxWidth: '95%',
    display: 'flex',
    alignSelf: 'center',
    fontSize: '16px',
  },
})

export default styles
