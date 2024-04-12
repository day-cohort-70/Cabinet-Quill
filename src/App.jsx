import { useState, useEffect } from "react"
import { getProductTypes, getProducts } from "./services/productsService"
import "./App.css"

// There are much simpler ways to achieve what we're trying to do here, but the purpose of doing it the way we are below is to better understand how useState and useEffect work together

// A component is a function that returns JSX
// The purpose of this component is to display all the products and a select dropdown to filter the products
export const App = () => {
  const [allProducts, setAllProducts] = useState([]) // returns [state, setterFn] accepts one argument: the initial value for our state
  const [productTypes, setProductTypes] = useState([])
  const [userTypeSelection, setUserTypeSelection] = useState(0)
  const [filteredProducts, setFilteredProducts] = useState([])

  console.log("I log with every render")

  // useEffect(first arg *fn: what we want to happen, second arg *arr: when we want it to happen)

  // useEffect #1
  useEffect(() => {
    console.log("I only log on the initial render")

    // We need to only run this block of code on the INITIAL render of the component
    getProducts().then((productsArr) => {
      setAllProducts(productsArr) // This will cause a rerender of the App component
    })

    getProductTypes().then((prodTypesArr) => {
      setProductTypes(prodTypesArr)
    })
  }, []) //an empty dependency array means we only want this function to run on the initial render

  // useEffect #2
  useEffect(() => {
    console.log(
      "I log on initial render AND whenever userTypeSelection changes OR whenever allProducts changes"
    )

    if (userTypeSelection === 0) {
      setFilteredProducts(allProducts)
    } else {
      const foundProducts = allProducts.filter(
        (productObj) => productObj.productTypeId === userTypeSelection
      )
      setFilteredProducts(foundProducts)
    }
  }, [userTypeSelection, allProducts]) //Run the function on the initial render and when userTypeSelection value changes OR when allProducts changes.

  const handleTypeSelectChange = (event) => {
    // need to know the value of the option the user selected (event.target.value)
    // console.log(`user selected product type number ${event.target.value}`)
    setUserTypeSelection(parseInt(event.target.value))
  }

  return (
    <>
      <select onChange={handleTypeSelectChange} id="product-type-select">
        <option value={0}>All Products</option>
        {productTypes.map((prodType) => {
          return (
            <option key={prodType.id} value={prodType.id}>
              {prodType.name}
            </option>
          )
        })}
      </select>
      <div id="product-container">
        {filteredProducts.map((prodObj) => {
          return (
            <div className="product-card" key={prodObj.id}>
              <img src={prodObj.imageUrl} className="product-image" />
              <p>{prodObj.name}</p>
              <p>${prodObj.price}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

//✅ Need to fetch the productTypes data from database (useEffect?)
//✅ need state to store product types
//✅ Need select input
//✅ populate the options of the input with the productType names and give value of prodType.id
//✅ watch for the event (user interaction)
//✅ capture the user selection (need state for this?)

// filter the products based on user selection
