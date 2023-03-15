type Product = {
  id: number
  name: string
  price: number
}

function ProductList() {
  const products: Product[] = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
  ]

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <span>
            {product.name} - £{product.price}
          </span>
          <button>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default ProductList
