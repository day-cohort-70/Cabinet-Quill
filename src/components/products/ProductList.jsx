import { useNavigate } from "react-router-dom"
/* the props object: 
{
  products: [{...}],
}
*/

// The responsibility of the ProductList component is to generate the JSX for the list of products that we wish to display on the DOM
export const ProductList = ({ products }) => {
  const navigate = useNavigate()

  return (
    <div id="product-container">
      {products.map((prodObj) => {
        return (
          <div
            className="product-card"
            key={prodObj.id}
            onClick={() => {
              navigate(`/product/${prodObj.id}`)
            }}
          >
            <img src={prodObj.imageUrl} className="product-image" />
            <p>{prodObj.name}</p>
            <p>${prodObj.price}</p>
          </div>
        )
      })}
    </div>
  )
}
