import { Link } from "react-router-dom"
import Cart from "../../assets/svgCart.svg"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


export const CartWidget = () => {    

    const {totalQuantity} = useContext(CartContext)

    console.log(totalQuantity)

    return (

        <>


            {totalQuantity > 0 ? (
            <Link to='/cart' className="me-5 position-relative" style={{width: "50px", height:"50px"}}>
                <span className="position-absolute bg-warning start-100 translate-middle badge rounded-pill text-black mt-1"> {totalQuantity} </span>
                <img src={Cart} alt="logo carrito" className="img-fluid"/>        
            </Link>
            ) : (
                null
            )

            }
        </>
        


    )
}

