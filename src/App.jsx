import { useEffect, useState } from "react"
import { AllOrders } from "./components/AllOrdersWithProducts.jsx"
import { AllProducts } from "./components/AllProducts.jsx"
import { getAllProducts } from "./services/productsService.js"

export const App = () => {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    getAllProducts().then((productsArr) => {
      setAllProducts(productsArr)
    })
  }, [])

  return (
    <div className="dashboard">
      <AllProducts allProducts={allProducts}/>
      <AllOrders allProducts={allProducts}/>
    </div>
  )
}
