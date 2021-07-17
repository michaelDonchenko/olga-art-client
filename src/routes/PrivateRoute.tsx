import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
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

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? <Redirect to='/login' /> : <Component {...props} />
      }
    />
  )
}

export default PrivateRoute
