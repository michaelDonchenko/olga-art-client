import styles from './styles'
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core'
import HandleChange from '../../hooks/HandleChange'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateOrder } from '../../redux/actions/order'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { RootState } from '../../redux/store'
import { clearOrder } from '../../redux/reducers/orderSlice'

type Params = {
  id: string
}

interface Ivalues {
  isPaid: boolean
  stringedIsPaid: string
  orderStatus: string
  trackNumber: string
  url: string
}

const UpdateOrderSection = () => {
  const { order } = useSelector((state: RootState) => state.order)

  const dispatch = useDispatch()
  const params: Params = useParams()
  const { id } = params
  const classes = styles()
  const [values, setValues] = useState<Ivalues>({
    isPaid: order?.isPaid as boolean,
    stringedIsPaid: (order?.isPaid as boolean) === true ? 'yes' : 'no',
    orderStatus: order?.orderStatus as string,
    trackNumber: order?.trackNumber as string,
    url: order?.url as string,
  })

  const { isPaid, orderStatus, trackNumber, url, stringedIsPaid } = values

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault()
    dispatch(updateOrder({ id, ...values }))
  }

  const changeIsPaid = (value: string) => {
    if (value === 'yes') {
      setValues({ ...values, isPaid: true, stringedIsPaid: 'yes' })
    }
    if (value === 'no') {
      setValues({ ...values, isPaid: false, stringedIsPaid: 'no' })
    }
  }

  const handleClear = () => {
    dispatch(clearOrder())
  }

  useEffect(() => {
    return () => handleClear()
  }, [])

  return (
    <div className={classes.flexDiv} onSubmit={handleSubmit}>
      <form className={classes.formDiv}>
        <FormControl required className={classes.formElement}>
          <InputLabel id='paid'>Order is Paid</InputLabel>
          <Select
            value={stringedIsPaid}
            required={true}
            name='paid'
            labelId='paid'
          >
            <MenuItem value='yes' onClick={(e) => changeIsPaid('yes')}>
              Yes
            </MenuItem>
            <MenuItem value='no' onClick={(e) => changeIsPaid('no')}>
              No
            </MenuItem>
          </Select>
        </FormControl>

        <FormControl required className={classes.formElement}>
          <InputLabel id='status'>Order Status</InputLabel>
          <Select
            onChange={(e) =>
              setValues({ ...values, orderStatus: e.target.value as string })
            }
            value={orderStatus}
            required={true}
            name='status'
            labelId='status'
          >
            <MenuItem value='Not proccessed'>Not Proccessed</MenuItem>
            <MenuItem value='Order Sent'>Order Sent</MenuItem>
            <MenuItem value='Cancelled'>Cancelled</MenuItem>
            <MenuItem value='Delivered'>Delivered</MenuItem>
          </Select>
        </FormControl>

        <TextField
          className={classes.formElement}
          label='Tracking number'
          name='trackNumber'
          type='text'
          value={trackNumber}
          onChange={(e) => HandleChange(e, values, setValues)}
        />

        <TextField
          className={classes.formElement}
          label='Tracking URL'
          name='url'
          type='text'
          value={url}
          onChange={(e) => HandleChange(e, values, setValues)}
        />

        <Button
          variant='contained'
          color='primary'
          className={classes.formElement}
          type='submit'
        >
          Update Order
        </Button>
      </form>
    </div>
  )
}

export default UpdateOrderSection
