import { ProductContext } from "./productContext"
import React, { useEffect, useState } from 'react'


export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([])

    const fetchProducts = async() => {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        console.log(data)
        setProducts(data)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}
