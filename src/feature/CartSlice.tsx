// import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { toast } from 'react-hot-toast'
// export interface CartState {
//     cart: []
//     id: number
//     totalItems: number
// }

// const initialState: CartState = {
//     cart: [],
//     id: 0,
//     totalItems: 0,
// }

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart: (
//             state: { cart: number[]; id: number; total: number },
//             action: PayloadAction<number>
//         ) => {
//             const products = action.payload
//             state.cart.push(products)
//             state.totalItems++
//             state.total += products.price
//             toast.success('Item added to cart')
//         },

//         removeFromCart: (
//             state: { cart: number[]; totalItems: number; total: number },
//             action: PayloadAction<number>
//         ) => {
//             const itemId: number = action.payload
//             const index = state.cart.findIndex(
//                 (product) => product.id === itemId
//             )

//             if (index >= 0) {
//                 state.totalItems--
//                 state.total -= state.cart[index].price
//                 state.cart.splice(index, 1)
//                 toast.success('item removed from cart')
//             }
//         },
//     },
// })

// export const { addToCart, resetCart, removeFromCart } = cartSlice.actions

// export default cartSlice.reducer
