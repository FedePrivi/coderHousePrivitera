import { Item } from "../Item/Item"


export const ItemList = ({ products })  => {

    return (
        <div className=" d-flex justify-content-evenly flex-wrap bg-secondary ps-3 pe-3 pb-3 m-4">
            {products.map(prod => <Item key={prod.id} id={prod.id} nombreProducto={prod.nombre} imagen={prod.img} precio={prod.precio} alt={prod.nombre}/>)}
        </div>
    )
}