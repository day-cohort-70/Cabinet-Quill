import { Outlet, Route, Routes } from "react-router-dom"
import { ProductsView } from "../components/products/ProductsView"
import { NavBar } from "../components/nav/NavBar"
import { useState } from "react"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  return (
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
      </Route>
    </Routes>
  )
}
