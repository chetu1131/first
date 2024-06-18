import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { decrement, increment } from '../feature/CouterSlice'

const Counter = () => {
    const count = useSelector((state: RootState) => state.couter.value)
    const dispatch = useDispatch()

    return (
        <div className="flex flex-col">
            <button
                className="bg-green-600 p-4 rounded-lg"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span className="m-2">{count}</span>
            <button
                className="bg-red-600 p-4 rounded-lg"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>
    )
}

export default Counter
