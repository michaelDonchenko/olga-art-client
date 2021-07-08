import styles from './styles'
import AdminSidenav from '../../components/admin-sidenav/AdminSidenav'
import { Hidden, Typography } from '@material-ui/core'
import UpdateSiteRulesEditor from '../../components/rich-text-editors/UpdateSiteRulesEditor'
import AdminMobileSidenav from '../../components/admin-sidenav/AdminMobileSidenav'

const UploadSiteRultes = () => {
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
          Update Site Rules details
        </Typography>

        <UpdateSiteRulesEditor />
      </div>
    </div>
  )
}

export default UploadSiteRultes
