import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({name, price, quantity, id}) => {


const {removeItem} = useContext(CartContext)


    return (
        
           <li className="bg-dark text-white p-3 rounded d-flex align-items-center justify-content-around mt-1">
                <h6>{name}</h6>
                <h6> Precio por unidad: ${price}</h6>
                <h6>{quantity}</h6>
                <h6>Subtotal: ${quantity * price}</h6>
                <button onClick={() => removeItem(id)} className="btn btn-danger"> X </button>
            </li> 
        


    )
}

export {CartItem}