import styles from '../styles'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../redux/store'
import ProductCard from '../../../components/product-card/ProductCard'
import Loader from '../../../components/loader'
import { useEffect } from 'react'
import { products as getProducts } from '../../../redux/actions/product'
import PaginationControll from '../../../components/pagination/PaginationControll'
import { resetQueryObj, setPage } from '../../../redux/reducers/productSlice'

const ProductsContainer = () => {
  const classes = styles()
  const dispatch = useDispatch()
  const { products, pages, page, loading, queryObj } = useSelector(
    (state: RootState) => state.product
  )

  const handleStateReset = () => {
    dispatch(setPage(1))
    dispatch(resetQueryObj())
  }

  useEffect(() => {
    dispatch(getProducts({ page, queryObj }))
  }, [page, queryObj])

  useEffect(() => {
    return () => handleStateReset()
  }, [])

  return (
    <>
      <div className={classes.productsContainer}>
        {loading && <Loader />}
        {!loading && products.length === 0 && <p>No products found...</p>}
        {!loading &&
          products.length > 0 &&
          products.map((p, i) => <ProductCard key={i} product={p} />)}
      </div>

      {!loading && pages > 1 && (
        <div>
          <PaginationControll page={page} pages={pages} setPage={setPage} />
        </div>
      )}
    </>
  )
}

export default ProductsContainer
