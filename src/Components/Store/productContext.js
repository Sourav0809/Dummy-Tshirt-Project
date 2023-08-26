import React from 'react'

const productContext = React.createContext(
    {
        products: [],
        setProducts: () => { },
        addToProductList: () => { }
    }
)


export default productContext;