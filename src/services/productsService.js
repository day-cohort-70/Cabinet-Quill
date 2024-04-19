export const getProducts = () => {
  return fetch("http://localhost:8088/products").then((res) => res.json())
}

export const getProductTypes = () => {
  return fetch("http://localhost:8088/productTypes").then((res) => res.json())
}

export const postNewProduct = (newProduct) => {
  const postOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  }

  return fetch("http://localhost:8088/products", postOptions).then((res) =>
    res.json()
  )
}

export const getProductById = (prodId) => {
  return fetch(`http://localhost:8088/products/${prodId}`).then((res) =>
    res.json()
  )
}
