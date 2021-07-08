import Filters from '../../components/filters-canvas/Filters'
import Title from '../../components/titles/Title'
import ProductsContainer from './components/ProductsContainer'

const Shop = () => {
  return (
    <div>
      <Title content='Categories and Filters' />
      <Filters />

      <ProductsContainer />
    </div>
  )
}

export default Shop
