import { useState } from "react"

export const ItemCount = ({initial, onAdd, stock}) => {

    const [cantidad, setCantidad] = useState(initial);

    

    function restarCantidad() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1 )
        }
    }

    
    function sumarCantidad() {
        if (cantidad < stock) {
            setCantidad(cantidad + 1 )
        }
    }



    return (
        <>
            
               <div className="m-auto  mb-5 position-relative">

                    <div className="d-flex justify-content-evenly mt-2">
                            <button className="btn btn-success" onClick={restarCantidad}> - </button>
                            <h3> {cantidad} </h3>
                            <button className="btn btn-success" onClick={sumarCantidad}> + </button>
                    </div>

                    <div className="d-flex mt-3">
                        <button className="btn btn-primary m-auto " onClick={() => {onAdd(cantidad)}} disabled={!stock}>Agregar al carrito</button>

                    </div>

                </div>

       
        </>
    )
}