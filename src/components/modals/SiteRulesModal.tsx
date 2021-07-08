import { Dialog, Typography } from '@material-ui/core'
import { closeSiteRulesModal } from '../../redux/reducers/modalSlice'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import parse from 'html-react-parser'
import styles from './styles'
import { DialogContent } from '@material-ui/core'
import { DialogTitle } from '@material-ui/core'

const SiteRulesModal = () => {
  const dispatch = useDispatch()
  const classes = styles()
  const { siteRules } = useSelector((state: RootState) => state.admin)

  const { siteRulesModal: modal } = useSelector(
    (state: RootState) => state.modal
  )

  const handleClose = () => {
    dispatch(closeSiteRulesModal())
  }

  return (
    <Dialog open={modal} onClose={handleClose}>
      <div style={{ width: '600px', maxWidth: '100%' }}>
        <DialogTitle>
          <Typography align='center' variant='h4' className={classes.header}>
            Site Policy Rules
          </Typography>
        </DialogTitle>

        <DialogContent style={{ padding: '10px' }}>
          {parse(siteRules)}
        </DialogContent>
      </div>
    </Dialog>
  )
}

export default SiteRulesModal
