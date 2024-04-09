import { useState, useEffect } from "react"
import { getProducts } from "./services/productsService"

// A component is a function that returns JSX
export const App = () => {
  const [products, setProducts] = useState([]) // returns [state, setterFn] accepts one argument: the initial value for our state

  console.log("I log with every render")

  // useEffect(first arg *fn: what we want to happen, second arg *arr: when we want it to happen)
  useEffect(() => {
    console.log("I only log on the initial render")

    // We need to only run this block of code on the INITIAL render of the component
    getProducts().then((productsArr) => {
      setProducts(productsArr) // This will cause a rerender of the App component
    })
  }, []) //an empty dependency array means we only want this function to run on the initial render

  return (
    <>
      <div className="container">
        {products.map((prodObj) => {
          return (
            <div className="product-card" key={prodObj.id}>
              <p>{prodObj.name}</p>
              <p>${prodObj.price}</p>
            </div>
          )
        })}
      </div>
      <div>Footer</div>
    </>
  )
}
