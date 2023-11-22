import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductContext } from "../context/productContext"
import { CartContext } from "../context/CartContext"

export const ShopPage = () => {
  
  const { products } = useContext(ProductContext)

  const {addPurchase, removePurchase} = useContext(CartContext)

  const handleAddProduct = (compra) => {
    console.log(compra)
    addPurchase(compra)
  }
  const handleRemoveProduct = (id) => {
    removePurchase(id)
  }
  

  return (
    <>
      <h1>Compras: </h1>
      <hr />

      {products.map(product => (
        <Card 
          key={product.id}
          imagen={product.image} 
          titulo={product.title} 
          descripcion={product.description} 
          precio={product.price}
          handleAddProduct={() => handleAddProduct(product)}
          handleRemoveProduct={() => handleRemoveProduct(product.id)}
        />
      ))}
    </>
  )
}

