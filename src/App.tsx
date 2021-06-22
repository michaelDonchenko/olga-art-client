import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import styles from './styles/appStyles'
import NavBar from './components/app-bar/NavBar'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Shop from './pages/shop/Shop'
import Footer from './components/footer/Footer'
import Cart from './pages/cart/Cart'
import Dashboard from './pages/admin/Dashboard'

const App: React.FC = () => {
  const classes = styles()

  return (
    <>
      <CssBaseline />
      <Router>
        <main className={classes.mainContainer}>
          <NavBar />

          <Switch>
            <div className={classes.container}>
              <Route path="/" exact component={Home} />
              <Route path="/shop" exact component={Shop} />
              <Route path="/cart" exact component={Cart} />
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
              {/* admin pages */}
              <Route path="/admin/dashboard" exact component={Dashboard} />
            </div>
          </Switch>

          <Footer />
        </main>
      </Router>
    </>
  )
}

export default App
