export const getProducts = () => {
  return fetch("http://localhost:8088/products").then((res) => res.json())
}
