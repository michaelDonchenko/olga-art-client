import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'
import { Hidden, Typography } from '@material-ui/core'
import UploadDetailsEditor from '../../components/rich-text-editors/UploadDetailsEditor'
import AdminMobileSidenav from '../../components/admin-sidenav/AdminMobileSidenav'

const UploadAboutDetails = () => {
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

        <Typography align='center' variant='h5' className={classes.mainHeader}>
          Update about me details
        </Typography>

        <UploadDetailsEditor />
      </div>
    </div>
  )
}

export default UploadAboutDetails
