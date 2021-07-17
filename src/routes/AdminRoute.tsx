import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

interface RouteProps {
  component: React.ComponentType<any>
  path: string
  exact: boolean
}

const AdminRoute: React.FC<RouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { user } = useSelector((state: RootState) => state.auth)

  return (
    <Route
      {...rest}
      render={(props) =>
        !user || user.role !== 'admin' ? (
          <Redirect to='/login' />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
}

export default AdminRoute
