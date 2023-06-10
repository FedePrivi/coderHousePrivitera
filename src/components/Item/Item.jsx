import { Link } from "react-router-dom"

export const Item = (props) => {


    return(

       

 


        <div className="card mt-2" style={{width: "18rem"}}>
            <main>
                <img src={props.imagen} className="card-img-top" alt={props.alt}/>
                <div className="card-body">
                    <h3 className="title text-center"> {props.nombreProducto} </h3>
                    <p className="card-text ms-3">${props.precio}</p>
                </div>
            </main>
            <footer className="d-flex justify-content-center">
                <Link to={`/item/${props.id}`} className="btn btn-secondary  w-75 m-3"> Ver Mas </Link>
            </footer>

        </div>
        
    )
}