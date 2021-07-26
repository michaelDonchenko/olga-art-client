import Filters from '../../components/filters-canvas/Filters'
import Title from '../../components/titles/Title'
import ProductsContainer from './components/ProductsContainer'
import Seo from '../../hooks/Seo'

const Shop = () => {
  return (
    <div>
      <Seo title='Shop page' name='Shop' />
      <Title content='Categories and Filters' />
      <Filters />

      <ProductsContainer />
    </div>
  )
}

export default Shop
