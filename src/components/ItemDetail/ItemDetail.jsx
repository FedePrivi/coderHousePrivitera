import { useContext, useState } from "react"
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

export const ItemDetail = (props) => {

  const [quantityAdded, setQuantityAdded] = useState(0)


    const { addItem } = useContext(CartContext)


    const handleOnAdd = (cantidad) => {
            setQuantityAdded(cantidad)           

            const item = {
            id:props.id,
            name: props.nombre,
            price:props.precio,     
            }
            
            addItem(item, cantidad)

        }

  return (
    <article className="card mb-3 mt-3" style={{width: "18rem", height: "500px"}}>
                    <main>
                        <img src={props.img} className="card-img-top" alt={props.nombre} />
                        <div className="card-body">
                            <h5 className="title text-center"> {props.nombre} </h5>
                            <p className="card-text ms-3">Precio: ${props.precio}</p>
                        </div>
                    </main>
       <footer className="w-100">

            {
              quantityAdded > 0 ? (
              <div className="d-flex mt-3">
                <Link className="btn btn-primary m-auto" to='/cart'> Terminar Compra </Link>
              </div>
              ) : (
                <ItemCount initial={1} stock={props.stock} onAdd={handleOnAdd}  />

              )

            }

       </footer>
    </article>
  )
}
