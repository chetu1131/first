import React, { useEffect, useState } from 'react'

interface CartState {
    id: number
    date: string
    products: [{ productId: number; quantity: number }]
}
const Cart = () => {
    const [cart, setCart] = useState<CartState[]>([])
    useEffect(() => {
        const fetchCart = async () => {
            fetch('https://fakestoreapi.com/carts')
                .then((res) => res.json())
                .then((json) => {
                    setCart(json)
                })
        }
        fetchCart()
    }, [])
    console.log(cart)

    return (
        <div className="flex">
            {cart.length > 0 &&
                cart.map((item) => (
                    <div key={item.id}>
                        <p>
                            {item.products.map((id) => (
                                <div
                                    key={id.productId}
                                    className="p-2 bg-slate-400 m-2"
                                >
                                    Producat Id : {id.productId}
                                    {'  '}
                                    Total items: {id.quantity}
                                </div>
                            ))}
                        </p>
                    </div>
                ))}
        </div>
    )
}

export default Cart
