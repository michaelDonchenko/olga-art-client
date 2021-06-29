import Filters from '../../components/filters-canvas/Filters'
import Title from '../../components/titles/Title'
import styles from './styles'

import ProductsContainer from './components/ProductsContainer'

const Shop = () => {
  const classes = styles()

  return (
    <div>
      <Title content='Categories and Filters' />
      <Filters />

      <ProductsContainer />
    </div>
  )
}

export default Shop
