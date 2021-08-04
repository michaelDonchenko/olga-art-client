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
import PrivateRoute from './routes/PrivateRoute'
import UserDashboard from './pages/user/UserDashboard'
import Orders from './pages/admin/Orders'
import Users from './pages/admin/Users'
import Categories from './pages/admin/Categories'
import Products from './pages/admin/Products'
import CreateProduct from './pages/admin/CreateProduct'
import AdminRoute from './routes/AdminRoute'
import UploadProductImages from './pages/admin/UploadProductImages'
import UpdateProduct from './pages/admin/UpdateProduct'
import UploadAboutDetails from './pages/admin/UploadAboutDetails'
import UploadSiteRultes from './pages/admin/UploadSiteRules'
import SingelProduct from './pages/single product/SingelProduct'
import Checkout from './pages/checkout/Checkout'
import OrderSuccess from './pages/order-success/OrderSuccess'
import UserOrder from './pages/user/UserOrder'
import AdminOrder from './pages/admin/AdminOrder'
import ScrollToTop from './hooks/ScrollToTop'
import ForgotPassword from './pages/forgot-password/ForgotPassword'
import ResetPassword from './pages/forgot-password/ResetPassword'
import Verification from './pages/verification-page/Verification'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './redux/store'
import { openErrorModal } from './redux/reducers/modalSlice'
import ErrorModal from './components/modals/ErrorModal'

const App: React.FC = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { auth, category, product, cart, order, message, admin } = useSelector(
    (state: RootState) => state
  )

  if (
    (auth.errorMessage ||
      category.errorMessage ||
      product.errorMessage ||
      cart.errorMessage ||
      order.error ||
      message.errorMessage ||
      admin.errorMessage ||
      product.addToWishlistError) === 'Unauthorized'
  ) {
    console.log('error')
    dispatch(openErrorModal())
  }

  return (
    <>
      <CssBaseline />
      <ErrorModal />

      <Router>
        <main className={classes.mainContainer}>
          <NavBar />
          <ScrollToTop />

          <Switch>
            <div className={classes.container}>
              <Route path='/' exact component={Home} />
              <Route path='/shop' exact component={Shop} />
              <Route path='/cart' exact component={Cart} />
              <Route path='/login' exact component={Login} />
              <Route path='/register' exact component={Register} />
              <Route
                path='/verify-account/:verificationCode'
                exact
                component={Verification}
              />
              <Route path='/forgot-password' exact component={ForgotPassword} />
              <Route path='/product/:id' exact component={SingelProduct} />
              <Route
                path='/password-reset/:id'
                exact
                component={ResetPassword}
              />

              {/* admin pages */}
              <AdminRoute path='/admin/dashboard' exact component={Dashboard} />
              <AdminRoute path='/admin/orders' exact component={Orders} />
              <AdminRoute path='/admin/users' exact component={Users} />
              <AdminRoute
                path='/admin/categories'
                exact
                component={Categories}
              />
              <AdminRoute path='/admin/products' exact component={Products} />
              <AdminRoute
                path='/admin/create-product'
                exact
                component={CreateProduct}
              />
              <AdminRoute
                path='/admin/upload-product-images/:id'
                exact
                component={UploadProductImages}
              />
              <AdminRoute
                path='/admin/update-product/:id'
                exact
                component={UpdateProduct}
              />
              <AdminRoute
                path='/admin/upload-about-me-details'
                exact
                component={UploadAboutDetails}
              />
              <AdminRoute
                path='/admin/upload-site-rules'
                exact
                component={UploadSiteRultes}
              />
              <AdminRoute
                path='/admin/order/:id'
                exact
                component={AdminOrder}
              />

              {/* user pages */}
              <PrivateRoute
                path='/user/dashboard'
                exact
                component={UserDashboard}
              />
              <PrivateRoute path='/checkout/:id' exact component={Checkout} />
              <PrivateRoute
                path='/order-success/:id'
                exact
                component={OrderSuccess}
              />
              <PrivateRoute
                path='/user/order/:id'
                exact
                component={UserOrder}
              />
            </div>
          </Switch>

          <Footer />
        </main>
      </Router>
    </>
  )
}

export default App
