export const getProducts = () => {
  return fetch("http://localhost:8088/products").then((res) => res.json())
}

export const getProductTypes = () => {
  return fetch("http://localhost:8088/productTypes").then((res) => res.json())
}
