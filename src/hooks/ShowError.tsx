import { Alert } from '@material-ui/lab'

const ShowError = (text: string | boolean) => {
  return (
    <div style={{ margin: '15px auto' }}>
      <Alert severity='error'>{text}</Alert>
    </div>
  )
}

export default ShowError
