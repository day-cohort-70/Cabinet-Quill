export const AllProducts = ({allProducts}) => {
 
  return (
    <>
      {allProducts.map((product) => (
        <div key={`product-${product.id}`}>{product.name}</div>
      ))}
    </>
  )
}
