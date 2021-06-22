import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cookies from 'universal-cookie'
import { RootState } from '../redux/store'

interface RouteProps {
  component: React.ComponentType<any>
  path: string
  exact: boolean
}

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useSelector((state: RootState) => state.auth)
  const cookies = new Cookies()

  return (
    <Route
      {...rest}
      render={(props) =>
        !user || !cookies.get('user') ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default PrivateRoute
