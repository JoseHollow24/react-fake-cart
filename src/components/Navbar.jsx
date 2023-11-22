import { Badge } from "@mui/material"
import { ShoppingCart } from "@mui/icons-material"
import { NavLink } from "react-router-dom";
import { useContext } from "react"
import { CartContext } from '../context/CartContext'


export const Navbar = () => {
  const { shoppingList} = useContext(CartContext)
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Carrito</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" to="/">Compras</NavLink>
              </li>
            </ul>
            <NavLink  to="/carrito">
              <Badge badgeContent={shoppingList.length} color="primary">
                <ShoppingCart color="action" />
              </Badge>
            </NavLink>
          </div>
        </div>
      </nav>
  )
}
