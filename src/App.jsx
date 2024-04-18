import { Route, Routes, Outlet } from "react-router-dom"
import "./App.css"
import { ProductsView } from "./components/products/ProductsView"
import { NavBar } from "./components/navbar/NavBar"
import { Layout } from "./components/Layout"

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductsView />} />
        <Route path="/characters" element={<Layout />}>
          <Route
            index
            element={
              <ul>
                <li>Aang</li>
                <li>Sokka</li>
                <li>Zuko</li>
                <li>Iroh</li>
              </ul>
            }
          />
          <Route path="aang" element={<div>Aang</div>} />
          <Route path="sokka" element={<div>Sokka</div>} />
          <Route path="iroh" element={<div>Iroh</div>} />
        </Route>
      </Routes>
    </>
  )
}
