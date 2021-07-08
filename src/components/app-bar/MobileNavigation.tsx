import styles from './styles'
import { useDispatch } from 'react-redux'
import { openNavigationModal } from '../../redux/reducers/modalSlice'
import NavigationModal from '../modals/NavigationModal'

const MobileNavigation = () => {
  const dispatch = useDispatch()
  const classes = styles()
  const handleOpen = () => {
    dispatch(openNavigationModal())
  }

  return (
    <div>
      <span
        onClick={handleOpen}
        style={{ cursor: 'pointer' }}
        className={classes.appLink}
      >
        Navigation Menu
      </span>

      <NavigationModal />
    </div>
  )
}

export default MobileNavigation
