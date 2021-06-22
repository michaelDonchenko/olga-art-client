import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Paper } from '@material-ui/core'

const AdminSidenav = () => {
  return (
    <Paper
      style={{
        height: 'calc(100vh - 104px)',
        width: '220px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography align="center" variant="h5" style={{ margin: '20px auto' }}>
        Admin pannel
      </Typography>

      <Button
        style={{ margin: '10px auto', width: '180px', maxWidth: '95%' }}
        color="secondary"
        variant="contained"
      >
        Dashboard
      </Button>

      <Button
        style={{ margin: '10px auto', width: '180px', maxWidth: '95%' }}
        color="secondary"
        variant="contained"
      >
        Orders
      </Button>

      <Button
        style={{ margin: '10px auto', width: '180px', maxWidth: '95%' }}
        color="secondary"
        variant="contained"
      >
        Users
      </Button>

      <Button
        style={{ margin: '10px auto', width: '180px', maxWidth: '95%' }}
        color="secondary"
        variant="contained"
      >
        Categories
      </Button>

      <Button
        style={{ margin: '10px auto', width: '180px', maxWidth: '95%' }}
        color="secondary"
        variant="contained"
      >
        Products
      </Button>

      <Button
        style={{ margin: '10px auto', width: '180px', maxWidth: '95%' }}
        color="secondary"
        variant="contained"
      >
        Create product
      </Button>
    </Paper>
  )
}

export default AdminSidenav
