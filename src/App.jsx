import { Outlet, Route, Routes } from "react-router-dom"
import { ProductsView } from "./components/ProductsView"
import "./App.css"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsView />} />
      <Route
        path="/characters"
        element={
          <div>
            <div>Header</div>
            <ul>
              <li>Aang</li>
              <li>Sokka</li>
              <li>Zuko</li>
              <li>Iroh</li>
            </ul>
            <div>Footer</div>
          </div>
        }
      />
      <Route
        path="/characters/aang"
        element={
          <div>
            <div>Header</div>
            <div>Aang</div>
            <div>Footer</div>
          </div>
        }
      />
    </Routes>
  )
}
