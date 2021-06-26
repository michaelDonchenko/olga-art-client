import CircularProgress from '@material-ui/core/CircularProgress'

const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        padding: '15px',
        margin: '10px 0',
      }}
    >
      <CircularProgress />
    </div>
  )
}

export default Loader
