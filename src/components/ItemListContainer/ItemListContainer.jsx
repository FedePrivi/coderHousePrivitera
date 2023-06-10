import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import {getDocs, collection, query, where} from 'firebase/firestore'
import {db} from '../../services/firebase/firebaseConfig'  
import { Loading } from "../../common/components/Loading";

export const ItemListContainer = () => {

  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


  const { categoryId } = useParams()

  


  useEffect(() => {
      setLoading(true)

      const collectionRef = categoryId 
      ? query(collection(db, "items"), where('categoryId', '==', categoryId)) 
      : collection(db, "items")

      getDocs(collectionRef)
        .then(response => {
           setProducts( response.docs.map(( product ) => ({id: product.id, ...product.data()})))
        })
        .catch(err => {
          console.log(err)
        })

        .finally(() => {
          setLoading(false)
        })

  }, [categoryId])


if (loading) return <Loading/>

if (products.length === 0) return <p> Producto no encontrado </p>

  return (
        <>

          <ItemList products={products}/>
        </>

  )
}
