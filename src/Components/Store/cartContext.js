import React from 'react'

const cartContext = React.createContext(
    {
        cartItems: [],
        setCartItems: () => { },
        addToCart: () => { },
    }
)


export default cartContext;