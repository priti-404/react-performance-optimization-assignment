import React from 'react'

const ProductList = React.memo(function ProductList({ products, onSelect }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <article className="product" key={product.id}>
          <div>
            <span className="category">{product.category}</span>
            <h3>{product.name}</h3>
            <p>₹{product.price.toLocaleString('en-IN')}</p>
          </div>
          <button onClick={() => onSelect(product)}>Select</button>
        </article>
      ))}
    </div>
  )
})

export default ProductList
