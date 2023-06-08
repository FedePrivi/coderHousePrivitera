import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { CartItem } from '../CartItem/CartItem'
import { Link } from "react-router-dom"

const Cart = () => {

    const {cart, totalQuantity, total, clearCart} = useContext(CartContext);

    if (totalQuantity === 0) {
        return (

            <div className="position-relative" style={{height: "calc(100vh - 88px)"}}>

                   <div className="position-absolute top-50 start-50 mb-5 translate-middle d-flex align-items-center flex-column"> 
                        <h1 > No hay items en el carrito </h1>
                        <Link to='/' className="mt-3 btn btn-primary"> Volver a la tienda </Link>
                   </div>
            </div>

        )
    }

    return (
        <div className="container mt-3 d-flex flex-column">
            {cart.map(product =>  <CartItem key={product.id} {...product} /> )}
            <div  className="d-flex flex-column align-items-center" style={{width: "100%"}}>
            <h3 className="mt-3"> Total a pagar: ${total} </h3>
                <button className="mt-3 btn btn-danger" onClick={() => clearCart()} style={{width: "30%"}}>Limpiar Carrito</button>
                <Link to='/checkout' className="mt-3 btn btn-primary" style={{width: "30%"}}> Checkout </Link>
            </div>
        </div>
    )
}

export { Cart }