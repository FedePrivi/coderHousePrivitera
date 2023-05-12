import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = (props) => {


    function agregarAlCarrito(cantidad) {
            console.log("se agrego al carrito", cantidad)
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
            <ItemCount initial={1} stock={props.stock} onAdd={(cantidad) => agregarAlCarrito(cantidad)}  />
       </footer>
    </article>
  )
}
