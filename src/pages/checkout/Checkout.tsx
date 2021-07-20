import { Typography } from '@material-ui/core'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getCart } from '../../redux/actions/cart'
import { useParams } from 'react-router'
import PersonalInfoForm from './components/PersonalInfoForm'
import { RootState } from '../../redux/store'
import ShowError from '../../hooks/ShowError'
import Loader from '../../components/loader'
import DetailsSaveSuccess from './components/DetailsSaveSuccess'
import { clearSuccess } from '../../redux/reducers/cartSlice'

type Params = {
  id: string
}

const Checkout = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const params: Params = useParams()
  const { id } = params
  const { errorMessage, successMessage, loading } = useSelector(
    (state: RootState) => state.cart
  )
  const { loading: authLoading, successMessage: authSuccessMessage } =
    useSelector((state: RootState) => state.auth)

  useEffect(() => {
    dispatch(getCart(id))
  }, [])

  if (successMessage && authSuccessMessage) {
    dispatch(clearSuccess())
  }

  if (authSuccessMessage) {
    window.scrollTo(0, 0)
  }

  return (
    <div className={classes.mainContainer}>
      <Typography className={classes.mainTitle} align='center' variant='h4'>
        Checkout Page
      </Typography>

      {errorMessage && ShowError(errorMessage)}

      {(loading || authLoading) && <Loader />}

      {successMessage === 'Cart loaded succefully from backend' && (
        <PersonalInfoForm />
      )}
      {authSuccessMessage === 'details updated succefully' && (
        <DetailsSaveSuccess />
      )}
    </div>
  )
}

export default Checkout
