import Cart from "../../assets/svgCart.svg"


export const CartWidget = () => {    
    return (
        <div className="me-5 position-relative" style={{width: "50px", height:"50px"}}>
            <span className="position-absolute bg-warning start-100 translate-middle badge rounded-pill text-black mt-1"> 0 </span>
            <img src={Cart} alt="logo carrito" className="img-fluid"/>        
        </div>

        


    )
}

