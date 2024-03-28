import { useEffect, useState } from "react"
import { getAllOrderWithItemsEmbedded } from "../services/ordersService.js"
import { getAllProducts } from "../services/productsService.js"

export const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllOrderWithItemsEmbedded().then((ordersArr) => {
            setAllOrders(ordersArr)
        })

        getAllProducts().then(productsArray => setProducts(productsArray))
    }, [])

    const getFullProductInfo = (productId) => {
        const foundProduct = products.find(product => product.id === productId)
        return foundProduct.name
    }

    return (
        <>
            {
                allOrders.map((order) => (
                    <div key={`order-${order.id}`}>
                        <h2>Order #{order.id}</h2>
                        <ol>
                        {
                            order.orderitems.map((oi,i) => <li key={i}>{ getFullProductInfo(oi.productId) }</li>)
                        }
                        </ol>
                    </div>
                ))
            }
        </>
    )
}
