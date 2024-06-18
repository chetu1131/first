import React from 'react'
import {
    MagnifyingGlassIcon,
    ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'About' },
    { id: 4, text: 'Contact' },
]

const Navbar = () => {
    const count = useSelector((state: RootState) => state.couter.value)

    return (
        <div className="bg-gray-100 flex justify-between items-center h-20 max-w-full">
            {/* {logo} */}
            <nav
                aria-label="Top"
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
            >
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        <ul className="hidden md:flex">
                            {navItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="p-2  m-2 cursor-pointer "
                                >
                                    {item.text}
                                </li>
                            ))}
                        </ul>
                        <div className="ml-auto flex items-center">
                            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                <Link
                                    to="#"
                                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                >
                                    Sign in
                                </Link>
                                <span
                                    className="h-6 w-px bg-gray-200"
                                    aria-hidden="true"
                                />
                                <Link
                                    to="#"
                                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                                >
                                    Create account
                                </Link>
                            </div>

                            <div className="flex lg:ml-6">
                                <Link
                                    to="#"
                                    className="p-2 text-gray-400 hover:text-gray-500"
                                >
                                    <span className="sr-only">Search</span>
                                    <MagnifyingGlassIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </Link>
                            </div>

                            <div className="ml-4 flow-root lg:ml-6">
                                <Link
                                    to="/cart"
                                    className="group -m-2 flex items-center p-2"
                                >
                                    <ShoppingBagIcon
                                        className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                                        {count ?? 0}
                                    </span>
                                    <span className="sr-only">
                                        items in cart, view bag
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
