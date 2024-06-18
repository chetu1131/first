import React from 'react'
import { Product } from './ProductList'
import { useDispatch } from 'react-redux'
import { increment } from '../feature/CouterSlice'

const Temp: React.FC<Product> = ({
    id,
    description,
    image,
    price,
    rating: { rate, count },
    title,
    onClick,
}): JSX.Element => {
    const dispatch = useDispatch()

    return (
        <>
            <div
                className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
                key={id}
            >
                <div
                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 "
                    onClick={onClick}
                >
                    <img
                        src={image}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 flex justify-between" onClick={onClick}>
                    <div className="">
                        <h3 className="text-sm text-gray-700">
                            <span>{title.slice(0, 20)}</span>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                            {description.slice(0, 70)}
                            ...
                        </p>
                    </div>
                </div>
                <div
                    className="flex justify-between items-center mt-2"
                    onClick={onClick}
                >
                    <p className="rounded-lg text-gray-900 bg-slate-400 p-2">
                        Price : ${price}
                    </p>
                    <p className="rounded-lg text-gray-900 bg-lime-200 p-2">
                        Rating : {rate}
                    </p>

                    <p className="rounded-lg text-gray-900 bg-purple-500 p-2">
                        Count: {count}
                    </p>
                </div>

                <input
                    className="bg-blue-500 p-2 rounded-lg mt-2  cursor-pointer w-full"
                    type="button"
                    value="Add to Cart"
                    onClick={() => {
                        dispatch(increment())
                    }}
                />
            </div>
        </>
    )
}

export default Temp
