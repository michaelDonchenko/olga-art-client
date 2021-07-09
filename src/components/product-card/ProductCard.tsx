import styles from './styles'
import CardInfo from './CardInfo'
import { Typography } from '@material-ui/core'
import ActionButtons from './ActionButtons'
import { useHistory } from 'react-router'

type Image = {
  url: string | undefined
}

interface IProduct {
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

interface IProps {
  product: IProduct
}

const ProductCard: React.FC<IProps> = ({ product }) => {
  const classes = styles()
  const productFromProps = product
  const history = useHistory()

  return (
    <div className={classes.root}>
      <img
        onClick={() => history.push(`/product/${product._id}`)}
        className={classes.productLink}
        src={
          !product.images.length
            ? `https://via.placeholder.com/500x500?text=No+Images+Yet..`
            : product.images[0].url
        }
        alt='Product img'
        style={{ width: '100%' }}
      />
      <Typography
        onClick={() => history.push(`/product/${product._id}`)}
        className={classes.productName}
        variant='h5'
        align='center'
      >
        {product.name}
      </Typography>
      <CardInfo
        category={product.category}
        price={product.price}
        qty={product.quantity}
      />
      <ActionButtons product={productFromProps} />
    </div>
  )
}

export default ProductCard
