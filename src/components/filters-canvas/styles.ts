import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
  main: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0',
  },

  FiltersContainer: {
    maxWidth: '95%',
    width: '1280px',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '7px',
    marign: '15px auto',
    alignItems: 'center',
  },

  textField: {
    width: '95%',
    maxWidth: '250px',
    margin: '15px',
  },

  radioButtonsContainer: {
    width: '95%',
    maxWidth: '400px',
    margin: '15px 20px',
  },

  radiosDiv: {
    display: 'flex',
    flexWrap: 'wrap',
  },
})

export default styles
