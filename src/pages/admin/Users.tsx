import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'

const Users = () => {
  const classes = styles()
  return (
    <div className={classes.mainContainer}>
      <AdminSidenav />
    </div>
  )
}

export default Users
