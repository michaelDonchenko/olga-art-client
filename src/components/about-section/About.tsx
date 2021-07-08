import { Grid } from '@material-ui/core'
import styles from './styles'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import Loader from '../loader'
import { useEffect } from 'react'
import {
  aboutMe,
  profileImage as getProfileImage,
} from '../../redux/actions/admin'
import parse from 'html-react-parser'

const About = () => {
  const classes = styles()
  const { profileImage, loading, about } = useSelector(
    (state: RootState) => state.admin
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfileImage())
  }, [])

  useEffect(() => {
    dispatch(aboutMe())
  }, [])

  return (
    <Grid container className={classes.main}>
      <Grid item xs={12} sm={4} className={classes.main}>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <img
              src={profileImage}
              className={classes.image}
              alt=' profile img'
            />
          </div>
        )}
      </Grid>

      <Grid item xs={12} sm={6}>
        <h1 className={classes.title}>About me</h1>

        <div className={classes.aboutDiv}>
          {!loading && about === '' ? null : parse(about)}
        </div>
      </Grid>
    </Grid>
  )
}

export default About
