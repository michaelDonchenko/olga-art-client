import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { openAdminMenuModal } from '../../redux/reducers/modalSlice'
import AdminMenuModal from '../modals/AdminMenuModal'

const AdminMobileSidenav = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(openAdminMenuModal())
  }

  return (
    <div
      style={{
        marginBottom: '10px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Button
        style={{ width: '350px', maxWidth: '95%' }}
        color='primary'
        variant='contained'
        onClick={handleClick}
      >
        Admin pannel
      </Button>

      <AdminMenuModal />
    </div>
  )
}

export default AdminMobileSidenav
