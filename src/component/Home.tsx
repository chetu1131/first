import React from 'react'
import Navbar from './Navbar'
import AllProducts from './ProductList'
export default function Home() {
    return (
        <>
            <div className="bg-white">
                <header className="relative bg-white">
                    <Navbar />
                    <AllProducts />
                </header>
            </div>
        </>
    )
}
