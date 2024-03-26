export const getAllProducts = () => {
  return fetch(`http://localhost:8088/products`).then((res) => res.json())
}

export const getProduct = (id) => {
  return fetch(`http://localhost:8088/products/${id}`).then((res) => res.json())
}
