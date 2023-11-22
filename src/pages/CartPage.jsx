import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export const CartPage = () => {

  const { shoppingList, increaseQuantity, decreaseQuantity, removePurchase } = useContext(CartContext)

  const calculateTotals = () => {
    return shoppingList.reduce((total, item) => total +item.price * item.quantity, 0).toFixed(2)
  }

  const handlePrint = () => {

    print()
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            shoppingList.map(item => (
              <tr key={item.id}>
                <th>{item.title}</th>
                <td>{item.price}</td>
                <td>
                  <button 
                    className="btn btn-outline-primary" 
                    onClick={() => decreaseQuantity(item.id)}
                  >-</button>
                  <button className="btn btn-primary">{item.quantity}</button>
                  <button 
                    className="btn btn-outline-primary" 
                    onClick={() => increaseQuantity(item.id)}
                  >+</button>
                </td>
                <td><button 
                    className="btn btn-danger" 
                    onClick={()=>removePurchase(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          }
            <tr>
              <th><b>TOTAL: </b></th>
              <td></td>
              <td></td>
              <td>${calculateTotals()}</td>
            </tr>
          
        </tbody>
      </table>

    <div className="d-grid gap-2">
      <button className="btn btn-primary" onClick={handlePrint}>Comprar</button>
    </div>
    </>
  )
}
