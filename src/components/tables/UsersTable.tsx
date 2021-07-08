import styles from './styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Loader from '../loader'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'
import { users as getUsers } from '../../redux/actions/auth'
import { setPage } from '../../redux/reducers/authSlice'
import moment from 'moment'
import PaginationControll from '../pagination/PaginationControll'

const UsersTable = () => {
  const classes = styles()
  const dispatch = useDispatch()

  const { loading, users, pages, page } = useSelector(
    (state: RootState) => state.auth
  )

  useEffect(() => {
    dispatch(getUsers(page))
  }, [page])

  return (
    <>
      {loading && <Loader />}
      <TableContainer className={classes.table} component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Created At</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!loading &&
              users?.length &&
              users?.map((u, i) => (
                <TableRow key={i}>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>
                    {u.verified === true ? (
                      <span style={{ color: 'green' }}>Active</span>
                    ) : (
                      <span style={{ color: 'red' }}>Not Active</span>
                    )}
                  </TableCell>
                  <TableCell>
                    {u.role === 'admin' ? 'Admin User' : 'Regular'}
                  </TableCell>
                  <TableCell>
                    {moment(u.createdAt).format('MMMM Do YYYY')}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {!loading && pages > 1 && (
        <div>
          <PaginationControll page={page} pages={pages} setPage={setPage} />
        </div>
      )}
    </>
  )
}

export default UsersTable
