import React, { useState } from 'react'
import "../styles/card.css"

export const Card = ({imagen, titulo, descripcion, precio, handleAddProduct, handleRemoveProduct}) => {
    const [added, setAdded] = useState(false)
    const clickAdd = () => {
        handleAddProduct()
        setAdded(true)
    }
    const clickRemove = () => {
        handleRemoveProduct()
        setAdded(false)
    }
  return (
    <div className="tarjeta">
        <img src={imagen} alt={titulo} className="tarjeta-imagen" />
        <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">{titulo}</h3>
            <p className="tarjeta-descripcion">{descripcion}</p>
            <p className="tarjeta-precio">{precio}</p>
        {added
            ? <button
                type="submit" 
                className="boton-quitar"
                onClick={clickRemove}
                >
                Quitar del Carrito
            </button>
            : <button
                type="submit" 
                className="boton-agregar"
                onClick={clickAdd}
                >
                Agregar al Carrito
            </button>
        }
        </div>
    </div>
  )
}
