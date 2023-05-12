import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { ItemList } from "../../ItemList/ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {

  
  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  

   console.log(categoryId)
   console.log("render")

useEffect(() => {

  const asyncFunc = categoryId ? getProductsByCategory : getProducts;

  asyncFunc(categoryId) 
    .then(products => {
      setProducts(products)
    })
    .catch(err => {
      console.error(err)
    })
}, [categoryId])




  return (
        <>

          <ItemList products={products}/>
        </>

  )
}
