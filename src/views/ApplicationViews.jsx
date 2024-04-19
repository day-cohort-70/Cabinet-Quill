import { Outlet, Route, Routes } from "react-router-dom"
import { ProductsView } from "../components/products/ProductsView"
import { NavBar } from "../components/navbar/NavBar"
import { NewProduct } from "../components/forms/NewProduct"
import { ProductDetails } from "../components/products/ProductDetails"

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }
        >
          <Route index element={<ProductsView />} />
          <Route path="new" element={<NewProduct />} />
          <Route path="product/:productId" element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  )
}
