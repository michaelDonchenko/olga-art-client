import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'
import { Hidden } from '@material-ui/core'
import AdminDetailsSection from '../../components/admin-details-section/AdminDetailsSection'
import UserMessages from '../../components/user-messages/UserMessages'
import StyledHr from '../../components/styled-hr/StyledHr'
import AdminMobileSidenav from '../../components/admin-sidenav/AdminMobileSidenav'
import AdminGraph from '../../components/admin-graph/AdminGraph'

const Dashboard = () => {
  const classes = styles()
  return (
    <div className={classes.mainContainer}>
      <Hidden xsDown>
        <AdminSidenav />
      </Hidden>

      <div className={classes.contentDiv}>
        <Hidden smUp>
          <AdminMobileSidenav />
        </Hidden>

        <AdminGraph />

        <AdminDetailsSection />
        <StyledHr />
        <UserMessages />
      </div>
    </div>
  )
}

export default Dashboard
