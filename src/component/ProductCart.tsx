import React from 'react'
// import { addToCart } from '../feature/CartSlice'
// import { useDispatch } from 'react-redux'

const ProductCart = () => {
    // const dispatch = useDispatch()
    // const handleAddToCart = () => {
    //     dispatch(addToCart(dataObj))
    //     return
    // }

    return (
        <div
            style={{
                width: '15em',
                backgroundColor: '#35D841',
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
            }}
        >
            {/* <p style={{ fontSize: 20, color: 'black' }}>{dataObj.title}</p>
            <img src={dataObj.image} alt="" height={200} width={200} /> */}

            {/* <button onClick={handleAddToCart}>Add to cart</button> */}
        </div>
    )
}

export default ProductCart
