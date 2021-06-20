import Filters from '../../components/filters-canvas/Filters'
import Title from '../../components/titles/Title'
import styles from './styles'
import ProductCard from '../../components/product-card/ProductCard'

const Shop = () => {
  const classes = styles()

  return (
    <div>
      <Title content='Categories and Filters' />
      <Filters />

      <div className={classes.productsContainer}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default Shop
