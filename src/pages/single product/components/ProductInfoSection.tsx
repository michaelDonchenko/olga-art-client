import { Typography, Tooltip } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { Button } from '@material-ui/core'
import styles from '../styles'
import { Product } from '../../../redux/reducers/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { useState } from 'react'
import { addToWishlist } from '../../../redux/actions/product'
import _ from 'lodash'
import { setCart } from '../../../redux/reducers/cartSlice'

interface Props {
  product: Product
}

const ProductInfoSection = ({ product }: Props) => {
  const classes = styles()
  const dispatch = useDispatch()
  const { user } = useSelector((state: RootState) => state.auth)

  const [open, setOpen] = useState(false)
  const [wishlistStatus, setWishlistStatus] = useState(
    user && product?.wishlist.includes(user._id)
  )

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product._id))
    setWishlistStatus(!wishlistStatus)
  }

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

  const handleLeave = () => {
    setTimeout(() => setOpen(false), 1000)
  }

  return (
    <div>
      <Typography variant='h4' align='center'>
        {product?.name}
      </Typography>
      <hr></hr>
      <div className={classes.infoDiv}>
        <p className={classes.text}>
          <span className={classes.spanTag}>Details:</span>
          {product?.description}
        </p>
        <p className={classes.text}>
          <span className={classes.spanTag}>Price:</span>
          {product?.price} ₪
        </p>
        <p className={classes.text}>
          <span className={classes.spanTag}>Status:</span>
          {product?.quantity === 0 ? (
            <span style={{ color: 'red' }}>No products left.</span>
          ) : (
            <span style={{ color: 'green' }}>In Stock</span>
          )}
        </p>
        <p className={classes.text}>
          <span className={classes.spanTag}>Category:</span>
          {product?.category.name !== undefined && product.category.name}
        </p>
      </div>

      <hr></hr>

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
          className={classes.button}
          endIcon={<ShoppingCartIcon />}
          variant='contained'
          color='primary'
          disabled={product?.quantity === 0}
          onMouseLeave={handleLeave}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </Tooltip>

      <Button
        className={classes.button}
        endIcon={<FavoriteBorderIcon />}
        color='secondary'
        variant={wishlistStatus ? 'contained' : 'outlined'}
        onClick={handleAddToWishlist}
        disabled={!user}
      >
        {wishlistStatus ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </Button>
    </div>
  )
}

export default ProductInfoSection
