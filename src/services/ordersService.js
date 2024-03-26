export const getAllOrderWithItemsEmbedded = () => {
  return fetch("http://localhost:8088/orders?_embed=orderitems").then((res) => res.json())
}
