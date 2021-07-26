import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'
import { Hidden } from '@material-ui/core'
import AdminDetailsSection from '../../components/admin-details-section/AdminDetailsSection'
import UserMessages from '../../components/user-messages/UserMessages'
import StyledHr from '../../components/styled-hr/StyledHr'
import AdminMobileSidenav from '../../components/admin-sidenav/AdminMobileSidenav'
import AdminGraph from '../../components/admin-graph/AdminGraph'
import Seo from '../../hooks/Seo'
import { useEffect } from 'react'
import { getMostWishedProducts } from '../../redux/api/product'

const Dashboard = () => {
  const classes = styles()

  const mostWished = async () => {
    const { data } = await getMostWishedProducts()
    return console.log(data)
  }

  useEffect(() => {
    mostWished()
  }, [])

  return (
    <div className={classes.mainContainer}>
      <Seo title='Admin Dashboard' name='Admin Dashboard' />

      <Hidden xsDown>
        <AdminSidenav />
      </Hidden>

      <div className={classes.contentDiv}>
        <Hidden smUp>
          <AdminMobileSidenav />
        </Hidden>

        <AdminGraph />
        <StyledHr />

        <AdminDetailsSection />
        <StyledHr />

        <UserMessages />
      </div>
    </div>
  )
}

export default Dashboard
