import { Typography } from '@material-ui/core'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import styles from './styles'
import Loader from '../loader'
import { messages as getMessages } from '../../redux/actions/message'
import Message from './Message'
import PaginationControll from '../pagination/PaginationControll'
import { setPage } from '../../redux/reducers/messageSlice'

const UserMessages = () => {
  const classes = styles()
  const dispatch = useDispatch()

  const { loading, messages, page, pages } = useSelector(
    (state: RootState) => state.message
  )

  useEffect(() => {
    dispatch(getMessages(page))
  }, [page])

  return (
    <div>
      <Typography className={classes.title} align='center' variant='h5'>
        User messages
      </Typography>

      <div className={classes.container}>
        {loading && <Loader />}
        {!loading && messages === null && <p>No messages to dispaly.</p>}
        {!loading &&
          messages?.length &&
          messages.map((m, i) => <Message message={m} key={i} />)}
      </div>

      {!loading && pages > 1 && (
        <PaginationControll page={page} pages={pages} setPage={setPage} />
      )}
    </div>
  )
}

export default UserMessages
