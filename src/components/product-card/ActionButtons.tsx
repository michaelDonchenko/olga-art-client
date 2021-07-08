import { Button, Tooltip } from '@material-ui/core'
import styles from './styles'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { setCart } from '../../redux/reducers/cartSlice'
import _ from 'lodash'
import { useState } from 'react'
import { addToWishlist } from '../../redux/actions/product'

type Image = {
  url: string | undefined
}

interface Product {
  _id: string
  name: string
  images: Image[]
  category: {
    _id: string
    name: string
  }
  price: number
  quantity: number
  sold: number
  description: string
  wishlist: string[]
}

interface Props {
  product: Product
}

const ActionButtons: React.FC<Props> = ({ product }) => {
  const classes = styles()
  const dispatch = useDispatch()

  const { user } = useSelector((state: RootState) => state.auth)
  const { wishlistLoading, products } = useSelector(
    (state: RootState) => state.product
  )

  const handleAddToCart = () => {
    setOpen(true)
    let cart = []
    let cartVariable = window.localStorage.getItem('cart')
    if (cartVariable !== null) {
      cart = JSON.parse(cartVariable)
    }

    cart.push({ ...product, count: 1 })
    //remove duplicates
    let uniqueItems = _.uniqWith(cart, _.isEqual)

    window.localStorage.setItem('cart', JSON.stringify(uniqueItems))
    dispatch(setCart(uniqueItems))
  }

  const [open, setOpen] = useState(false)
  const [wishlistStatus, setWishlistStatus] = useState(
    user && product.wishlist.includes(user._id)
  )

  const handleLeave = () => {
    setTimeout(() => setOpen(false), 1000)
  }

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product._id))
    setWishlistStatus(!wishlistStatus)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '20px',
      }}
    >
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onMouseLeave={handleLeave}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={
          <>
            <p style={{ padding: '5px 10px', fontSize: '16px' }}>
              Product Added to cart
            </p>
          </>
        }
        placement='top-start'
      >
        <Button
          endIcon={<ShoppingCartIcon />}
          className={classes.button}
          variant='contained'
          color='primary'
          onClick={handleAddToCart}
          disabled={product.quantity === 0}
        >
          Add to cart
        </Button>
      </Tooltip>

      <Button
        onClick={handleAddToWishlist}
        endIcon={<FavoriteBorderIcon />}
        className={classes.button}
        variant={wishlistStatus ? 'contained' : 'outlined'}
        color='secondary'
        disabled={!user}
      >
        {wishlistLoading
          ? 'Loading...'
          : wishlistStatus
          ? 'Remove from Wishlist'
          : 'Add to Wishlist'}
      </Button>
    </div>
  )
}

export default ActionButtons
