import { useEffect, useState } from "react"
import { getAllProducts } from "../services/productsService"

export const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    getAllProducts().then((productsArr) => {
      setAllProducts(productsArr)
    })
  }, [])

  return (
    <>
      {allProducts.map((product) => (
        <div key={`product-${product.id}`}>{product.name}</div>
      ))}
    </>
  )
}
