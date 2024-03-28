import { AllOrders } from "./components/AllOrdersWithProducts.jsx"
import { AllProducts } from "./components/AllProducts.jsx"

export const App = () => {

  return (
    <div className="dashboard">
      <AllProducts />
      <AllOrders />
    </div>
  )
}
