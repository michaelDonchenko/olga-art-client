import { useState } from 'react'
import styles from '../styles'
import { TextField } from '@material-ui/core'
import HandleChange from '../../../hooks/HandleChange'
import { Typography, Button } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../redux/store'
import { updateDetails } from '../../../redux/actions/auth'
import { clearSuccess } from '../../../redux/reducers/cartSlice'

const PersonalInfoForm = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state.auth)

  const [values, setValues] = useState({
    name: user?.userInfo?.name,
    email: user?.userInfo?.email,
    phone: user?.userInfo?.phone,
    country: user?.userInfo?.country,
    city: user?.userInfo?.city,
    street: user?.userInfo?.street,
    zipCode: user?.userInfo?.zipCode,
    homeNumber: user?.userInfo?.homeNumber,
    apartment: user?.userInfo?.apartment,
  })

  const {
    name,
    email,
    phone,
    country,
    city,
    street,
    zipCode,
    homeNumber,
    apartment,
  } = values

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(clearSuccess())
    dispatch(
      updateDetails({
        name: name || '',
        email: email || '',
        phone: phone || '',
        country: country || '',
        city: city || '',
        street: street || '',
        zipCode: zipCode || '',
        homeNumber: homeNumber || '',
        apartment: apartment || '',
      })
    )
  }

  return (
    <form className={classes.formContainer} onSubmit={handleSubmit}>
      <Typography className={classes.subTitle} variant='h5' align='center'>
        Personal details:
      </Typography>
      <TextField
        className={classes.formElement}
        label='Your Name'
        name='name'
        type='text'
        required={true}
        variant='outlined'
        value={name}
        onChange={(e) => HandleChange(e, values, setValues)}
      />
      <TextField
        className={classes.formElement}
        label='Email address'
        name='email'
        type='email'
        required={true}
        variant='outlined'
        value={email}
        onChange={(e) => HandleChange(e, values, setValues)}
      />
      <TextField
        className={classes.formElement}
        label='Phone number'
        name='phone'
        type='number'
        required={true}
        variant='outlined'
        value={phone}
        onChange={(e) => HandleChange(e, values, setValues)}
      />

      <Typography className={classes.subTitle} variant='h5' align='center'>
        Delivery details:
      </Typography>

      <TextField
        className={classes.formElement}
        label='Country'
        name='country'
        type='text'
        required={true}
        variant='outlined'
        value={country}
        onChange={(e) => HandleChange(e, values, setValues)}
      />
      <TextField
        className={classes.formElement}
        label='City'
        name='city'
        type='text'
        required={true}
        variant='outlined'
        value={city}
        onChange={(e) => HandleChange(e, values, setValues)}
      />
      <TextField
        className={classes.formElement}
        label='Street'
        name='street'
        type='text'
        required={true}
        variant='outlined'
        value={street}
        onChange={(e) => HandleChange(e, values, setValues)}
      />
      <TextField
        className={classes.formElement}
        label='Zip Code'
        name='zipCode'
        type='number'
        required={true}
        variant='outlined'
        value={zipCode}
        onChange={(e) => HandleChange(e, values, setValues)}
      />
      <p style={{ textAlign: 'center', color: 'GrayText', marginTop: '0' }}>
        In order to check your Zip Code click{' '}
        {
          <a
            style={{ textDecoration: 'none', color: '#181818' }}
            target='_blank'
            rel='noreferrer'
            href='https://israelpost.co.il/%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D/%D7%90%D7%99%D7%AA%D7%95%D7%A8-%D7%9E%D7%99%D7%A7%D7%95%D7%93/'
          >
            Here
          </a>
        }
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TextField
          className={classes.numberElement}
          label='Home'
          name='homeNumber'
          type='number'
          required={true}
          variant='outlined'
          value={homeNumber}
          helperText='Please enter your home number'
          onChange={(e) => HandleChange(e, values, setValues)}
        />
        <TextField
          className={classes.numberElement}
          label='Apartment'
          name='apartment'
          type='number'
          required={true}
          variant='outlined'
          value={apartment}
          helperText='Please enter your apartment number'
          onChange={(e) => HandleChange(e, values, setValues)}
        />
      </div>

      <Button
        type='submit'
        className={classes.checkoutButton}
        variant='outlined'
      >
        Continue
      </Button>
    </form>
  )
}

export default PersonalInfoForm
