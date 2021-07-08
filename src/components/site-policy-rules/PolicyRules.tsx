import styles from './styles'
import { Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { openSiteRulesModal } from '../../redux/reducers/modalSlice'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { siteRules as getSiteRules } from '../../redux/actions/admin'

const PolicyRules = () => {
  const classes = styles()
  const dispatch = useDispatch()

  const { siteRules } = useSelector((state: RootState) => state.admin)

  const handleOpen = () => {
    dispatch(openSiteRulesModal())
  }

  useEffect(() => {
    dispatch(getSiteRules())
  }, [])

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Our Site Policy Rules</h1>
      <Button
        onClick={handleOpen}
        className={classes.button}
        variant='contained'
        color='primary'
        disabled={!siteRules}
      >
        View our site rules
      </Button>
    </div>
  )
}

export default PolicyRules
