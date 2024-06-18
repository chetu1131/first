import React, { Fragment, useEffect, useState } from 'react'
import Temp from './Temp'
import { useNavigate } from 'react-router-dom'

export interface Product {
    id: number
    category: string
    description: string
    image: string
    price: number
    rating: {
        rate: number
        count: number
    }
    title: string
    onClick: () => void
}

export default function Products() {
    const navigate = useNavigate()
    const [data, setData] = useState<Product[]>([])
    useEffect(() => {
        const fetchdata = async () => {
            fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((json) => {
                    setData(json)
                })
        }
        fetchdata()
    }, [setData])

    async function getProductById(id: number) {
        navigate('/product/' + id)
    }
    return (
        <div className="bg-white">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center mt-2">
                Product to purchase
            </h2>
            {data.length ? (
                <div className="m-24 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 p-4">
                    <Fragment>
                        {data.map((product) => (
                            <>
                                <Temp
                                    key={product.id}
                                    title={product.title}
                                    description={product.description}
                                    image={product.image}
                                    price={product.price}
                                    id={0}
                                    category={product.category}
                                    rating={{
                                        rate: product.rating.rate,
                                        count: product.rating.count,
                                    }}
                                    onClick={() => getProductById(product.id)}
                                />
                            </>
                        ))}
                    </Fragment>
                </div>
            ) : (
                <h2 className="text-center text-8xl">Loading....</h2>
            )}
        </div>
    )
}
