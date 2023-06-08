import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])


console.log(cart)
    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev,{ ...item, quantity }])
        
        }else {
            console.error("El producto ya fue agregado")
        }
    }

    const totalQuantity = cart.length;

    const total = cart.reduce((accumulator, product) => accumulator + (product.price * product.quantity ), 0)

    const removeItem = (itemId) => {
        const cartUpdate = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdate)
    }

    const clearCart = () => {
        setCart([])
    }


    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId )
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>

            {children}

        </CartContext.Provider>
    )
}

