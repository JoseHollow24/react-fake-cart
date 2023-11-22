import { useReducer } from "react"
import { CartContext } from "./CartContext"


const initialState = []

export const CartProvider = ({children}) => {

    const comprasReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CART] Agregar compra':
                return [...state, action.payload]
            case '[CART] Aumentar cantidad compra':
                return state.map(item => {
                    const cant = item.quantity + 1
                    if(item.id === action.payload) return {...item, quantity: cant}
                    return item
                })
            case '[CART] Disminuir cantidad compra':
                return state.map(item => {
                    const cant = item.quantity -1
                    if(item.id === action.payload && item.quantity > 1) return {...item, quantity: cant}
                    return item
                })
                break;
            case '[CART] Eliminar Compra':
                return state.filter(compra => compra.id !== action.payload)
            default:
                return state;
        }
    }

    const [shoppingList, dispatch] = useReducer(comprasReducer, initialState)
    
    const addPurchase = (compra) => {
        compra.quantity = 1
        const action = {
            type: '[CART] Agregar compra',
            payload: compra
        }
        dispatch(action)


    }
    const increaseQuantity = (id) => {
        const action = {
            type: '[CART] Aumentar cantidad compra',
            payload: id
        }
        dispatch(action)

    }
    const decreaseQuantity = (id) => {
        const action = {
            type: '[CART] Disminuir cantidad compra',
            payload: id
        }
        dispatch(action)

    }
    const removePurchase = (id) => {
        const action = {
            type: '[CART] Eliminar Compra',
            payload: id
        }
        dispatch(action)

    }


    
    

  return (
    <CartContext.Provider value={{shoppingList, addPurchase, increaseQuantity, decreaseQuantity, removePurchase}}>
        {children}
    </CartContext.Provider>
  )
}
