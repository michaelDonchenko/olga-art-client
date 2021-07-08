import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { banner } from '../../redux/actions/admin'
import { RootState } from '../../redux/store'
import Loader from '../loader'
import styles from './styles'

const Banner: React.FC = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { bannerImage, loading } = useSelector(
    (state: RootState) => state.admin
  )

  useEffect(() => {
    dispatch(banner())
  }, [])
  return (
    <div className={classes.container}>
      {loading ? (
        <Loader />
      ) : (
        <img className={classes.img} src={bannerImage} alt='banner' />
      )}
    </div>
  )
}

export default Banner
