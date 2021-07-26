import { Typography } from '@material-ui/core'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { verify } from '../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Loader from '../../components/loader'

type Params = {
  verificationCode: string
}

const Verification = () => {
  const params: Params = useParams()
  const { verificationCode } = params
  const dispatch = useDispatch()
  const { verificationError, verificationSuccess, loading } = useSelector(
    (state: RootState) => state.auth
  )

  const handleVerification = async () => {
    await dispatch(verify(verificationCode))
  }

  useEffect(() => {
    handleVerification()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        margin: '15px 0',
      }}
    >
      <div style={{ width: '600px', maxWidth: '100%', margin: '30px auto' }}>
        {loading && <Loader />}

        <Typography
          variant='h5'
          align='center'
          style={{
            padding: '10px',
            color: `${verificationError ? 'red' : 'green'}`,
          }}
        >
          {verificationError || verificationSuccess}
        </Typography>
      </div>
    </div>
  )
}

export default Verification
