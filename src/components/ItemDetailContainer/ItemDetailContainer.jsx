import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

import { getDoc, doc } from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'
import { Loading } from "../../common/components/Loading"


export const ItemDetailContainer = () => {

        const [product, setProduct] = useState(null)
        const [loading, setLoading] = useState(true)

        const { itemId } = useParams()
        
        
   useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'items', itemId)

        getDoc(docRef)
            .then(response => {
             
                setProduct({id: response.id, ...response.data()})
            })
            .catch(err => {
                console.log(err)
            })
            .finally(setLoading(false))
            

   }, [itemId])


   if (loading) return <Loading/>
    
  return (
    <>

        <div className=" m-auto w-50 d-flex justify-content-center bg-secondary mb-5 rounded-2 mt-3" style={{height: "546px"}}>
            <ItemDetail {...product}/>
        </div>
    </>
  )
}
