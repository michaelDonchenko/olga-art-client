import React from 'react'
import { useEffect, useState } from 'react'
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

  const [width, setWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    dispatch(banner())
  }, [])
  return (
    <div className={classes.container}>
      {loading ? (
        <Loader />
      ) : (
        <img
          className={width > 800 ? classes.smallImg : classes.largeImage}
          src={bannerImage}
          alt='banner'
        />
      )}
    </div>
  )
}

export default Banner
