import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './component/Home'
import Cart from './component/Cart'
import OneProduct from './component/Product'

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/product/:id"
                                element={<OneProduct />}
                            />
                            <Route path="/cart" element={<Cart />} />
                        </Routes>
                    </div>
                </header>
            </div>
        </BrowserRouter>
    )
}

export default App
