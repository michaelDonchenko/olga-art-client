import { Typography } from '@material-ui/core'

const Footer = () => {
  return (
    <div
      style={{
        height: '40px',
        backgroundColor: '#181818',
        position: 'sticky',
        top: '100%',
        boxShadow:
          'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px',
      }}
    >
      <Typography align='center' variant='subtitle1' style={{ color: 'white' }}>
        Copyright © by Michael Donchenko
      </Typography>
    </div>
  )
}

export default Footer
