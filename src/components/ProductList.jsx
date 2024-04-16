// The responsibility of the ProductList component is to generate the JSX for the list of products that we wish to display on the DOM

/* the props object: 
  {
    products: [{...}],
  }
*/

export const ProductList = ({ products }) => {
  return (
    <div id="product-container">
      {products.map((prodObj) => {
        return (
          <div className="product-card" key={prodObj.id}>
            <img src={prodObj.imageUrl} className="product-image" />
            <p>{prodObj.name}</p>
            <p>${prodObj.price}</p>
          </div>
        )
      })}
    </div>
  )
}
