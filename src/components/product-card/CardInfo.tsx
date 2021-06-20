import React from 'react'
import styles from './styles'

type Category = {
  _id: string
  name: string
}

type Props = {
  category: Category
  price: number
  qty: number
}

const CardInfo: React.FC<Props> = (props: Props) => {
  const { category, price, qty } = props
  const classes = styles()

  return (
    <div className={classes.productInfo}>
      <p className={classes.text}>
        Price:{<span className={classes.productSpan}>₪{price}</span>}
      </p>
      <p className={classes.text}>
        Category:{<span className={classes.productSpan}>{category.name}</span>}
      </p>
      <p className={classes.text}>
        Status:
        {qty > 0 ? (
          <span className={classes.inStockSpan}>In stock</span>
        ) : (
          <span className={classes.outStockSpan}>Out of stock</span>
        )}
      </p>
    </div>
  )
}

export default CardInfo
