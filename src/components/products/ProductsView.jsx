import { useState, useEffect } from "react"
import { getProducts } from "../../services/productsService"
import { ProductFilter } from "./ProductFilter"
import { ProductList } from "./ProductList"

// The responsibility of the ProductsView component is to render the components that make up the products view page
export const ProductsView = () => {
  const [allProducts, setAllProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    getProducts().then((productsArr) => {
      setAllProducts(productsArr)
      setFilteredProducts(productsArr)
    })
  }, [])

  return (
    <>
      <ProductFilter
        setFilteredProducts={setFilteredProducts}
        allProductsArray={allProducts}
      />
      <ProductList products={filteredProducts} />
    </>
  )
}
