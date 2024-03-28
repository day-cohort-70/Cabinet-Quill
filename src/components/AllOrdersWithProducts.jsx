import { useEffect, useState } from "react"
import { getAllOrderWithItemsEmbedded } from "../services/ordersService.js"

export const AllOrders = ({allProducts}) => {
    const [allOrders, setAllOrders] = useState([])

    useEffect(() => {
        getAllOrderWithItemsEmbedded().then((ordersArr) => {
            setAllOrders(ordersArr)
        })
    }, [])

    const getFullProductInfo = (productId) => {
        const foundProduct = allProducts.find(product => product.id === productId)
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
