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
            name: props.title,
            price:props.price,     
            }
            
            addItem(item, cantidad)

        }

  return (
    <article className="card mb-3 mt-3" style={{width: "18rem", height: "520px"}}>
                    <main>
                        <img src={props.image} className="card-img-top" alt={props.title} />
                        <div className="card-body">
                            <h5 className="title text-center"> {props.title} </h5>
                            <h6 className="title text-center"> {props.description} </h6>
                            <p className="card-text ms-3">Precio: ${props.price}</p>
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
