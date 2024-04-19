import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getProductTypes, postNewProduct } from "../../services/productsService"
import "./form.css"

export const NewProduct = () => {
  const [newProduct, setNewProduct] = useState({})
  const [productTypes, setProductTypes] = useState([])

  const navigate = useNavigate() // returns to us a function that allows us to navigate to a specific url

  const getAllProductTypes = async () => {
    const prodTypesArr = await getProductTypes()
    setProductTypes(prodTypesArr)
  }

  useEffect(() => {
    getAllProductTypes()
  }, []) // run this only on initial render

  /***  Using the .then() method instead:  ***/
  // useEffect(() => {
  //   getProductTypes().then((prodTypesArr) => {
  //     setProductTypes(prodTypesArr)
  //   })
  // }, [])

  const handleSave = (event) => {
    event.preventDefault() //prevent the default functionality of reloading the page

    //todo: post our new product object to the database!
    postNewProduct(newProduct).then((postedProdObj) => {
      //todo: Now navigate to the products page so we can see our new product!
      navigate(`/product/${postedProdObj.id}`)
    })
  }

  return (
    <form>
      <h2 className="form-title">New Product!!!</h2>
      <fieldset id="name-field">
        <label>
          Name:{" "}
          <input
            onChange={(event) => {
              const copy = { ...newProduct }
              copy.name = event.target.value
              setNewProduct(copy)
            }}
            type="text"
          />
        </label>
      </fieldset>
      <fieldset id="product-type-field">
        <label>
          Product Type:{" "}
          <select
            onChange={(event) => {
              const copy = { ...newProduct }
              copy.productTypeId = parseInt(event.target.value)
              setNewProduct(copy)
            }}
          >
            {productTypes.map((prodType) => {
              return (
                <option key={prodType.id} value={prodType.id}>
                  {prodType.name}
                </option>
              )
            })}
          </select>
        </label>
      </fieldset>
      <fieldset id="stock-field">
        <label>
          Stock:{" "}
          <input
            type="number"
            onChange={(event) => {
              const copy = { ...newProduct }
              copy.stock = parseInt(event.target.value)
              setNewProduct(copy)
            }}
          ></input>
        </label>
      </fieldset>
      <fieldset id="price-field">
        <label>
          Price:{" "}
          <input
            type="number"
            onChange={(event) => {
              const copy = { ...newProduct }
              copy.price = parseInt(event.target.value)
              setNewProduct(copy)
            }}
          />
        </label>
      </fieldset>
      <fieldset id="image-field">
        <label>
          Image URL:{" "}
          <input
            type="text"
            onChange={(event) => {
              const copy = { ...newProduct }
              copy.imageUrl = event.target.value
              setNewProduct(copy)
            }}
          />
        </label>
      </fieldset>
      <button className="btn-secondary save-button" onClick={handleSave}>
        Save
      </button>
    </form>
  )
}
