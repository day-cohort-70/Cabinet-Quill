import { useEffect, useState } from "react"
import { getProductTypes } from "../../services/productsService"

/* the props object: 
  {
    setFilteredProducts: fn(),
    allProductsArray: [{...}]
  }
*/

// The responsibility of the ProductFilter component is to generate the JSX for the select drowpdown and to handle the functionality of filtering the products
export const ProductFilter = ({ setFilteredProducts, allProductsArray }) => {
  const [productTypes, setProductTypes] = useState([])

  useEffect(() => {
    getProductTypes().then((prodTypesArr) => {
      setProductTypes(prodTypesArr)
    })
  })

  const handleTypeSelectChange = (event) => {
    if (parseInt(event.target.value) === 0) {
      setFilteredProducts(allProductsArray)
    } else {
      const foundProducts = allProductsArray.filter(
        (productObj) =>
          productObj.productTypeId === parseInt(event.target.value)
      )
      setFilteredProducts(foundProducts)
    }
  }

  return (
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
  )
}
