import { useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import { useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {

        const [product, setProduct] = useState(null)


        const { itemId } = useParams()
        console.log(itemId);
   useEffect(() => {
        getProductsById( itemId )
            .then(result => {
                setProduct(result);
            })
            .catch(error => {
                console.log(error)
            })
   }, [itemId])

    
  return (
    <>

        <div className=" m-auto w-50 d-flex justify-content-center bg-secondary mb-5 rounded-2" style={{height: "532px"}}>
            <ItemDetail {...product}/>
        </div>
    </>
  )
}
