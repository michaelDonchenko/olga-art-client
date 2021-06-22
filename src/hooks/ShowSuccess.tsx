import { Alert } from '@material-ui/lab'

const ShowSuccess = (text: string | boolean) => {
  return (
    <div style={{ margin: '15px auto' }}>
      <Alert severity='success'>{text}</Alert>
    </div>
  )
}

export default ShowSuccess
