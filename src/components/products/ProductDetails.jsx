import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProductById } from "../../services/productsService"

// The responsibility of the ProductDetails component is to generate JSX for a detailed view of the product
export const ProductDetails = () => {
  const [product, setProduct] = useState({})

  const { productId } = useParams() // returns an object with key value pair(s) of our route parameter(s) we defined in our <Route /> ApplicationViews.jsx

  useEffect(() => {
    getProductById(productId).then((prod) => {
      setProduct(prod)
    })
  }, [])

  return (
    <section>
      <h2>Product details for product #{productId}</h2>
      <div className="product-card">
        <img src={product.imageUrl} className="product-image" />
        <p>{product.name}</p>
        <p>${product.price}</p>
        {product.stock === 0 ? <p>Out of Stock</p> : null}
      </div>
    </section>
  )
}
