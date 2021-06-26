import styles from './styles'
import UserSidenav from '../../components/user-sidenav/UserSidenav'

const UserDashboard = () => {
  const classes = styles()
  return (
    <div className={classes.mainContainer}>
      <UserSidenav />
    </div>
  )
}

export default UserDashboard
