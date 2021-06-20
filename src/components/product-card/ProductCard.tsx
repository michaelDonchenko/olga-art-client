import styles from './styles'
import CardInfo from './CardInfo'
import { Typography } from '@material-ui/core'
import image from '../../utils/image1.jpg'
import ActionButtons from './ActionButtons'

const ProductCard = () => {
  const classes = styles()

  const card = {
    category: {
      _id: '1',
      name: 'Rings',
    },
    price: 150,
    qty: 1,
  }

  return (
    <div className={classes.root}>
      <img src={image} alt='Product img' style={{ width: '100%' }} />
      <Typography className={classes.productName} variant='h5' align='center'>
        product name
      </Typography>
      <CardInfo category={card.category} price={card.price} qty={card.qty} />
      <ActionButtons />
    </div>
  )
}

export default ProductCard
