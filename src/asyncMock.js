
const products = [
    {id: "1",
    nombre:'Remera Argentina',
    precio: 2500,
    categoria: 'remeras',
    img: 'https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe71e3601/products/AD_HB9215CAM/AD_HB9215CAM-1.JPG',
    stock: 10,
    descripcion: "Descripcion de la remera"
    },
    {
    id: "2",
    nombre:'Remera Paraguay',
    precio: 1000,
    categoria: 'remeras',
    img: 'https://todosobrecamisetas.com/wp-content/uploads/camiseta-paraguay-adidas-2018-1.jpg',
    stock: 5,
    descripcion: "Descripcion de la remera"
    },
    {
    id: "3",
    nombre:'Remera Peru',
    precio: 2000,
    categoria: 'remeras',
    img: 'https://i.pinimg.com/originals/ec/19/d5/ec19d5f50aa47a52d48eb12d1878dd3b.jpg',
    stock: 3,
    descripcion: "Descripcion de la remera"
    },
    {
        id: "4",
        nombre:'Botin X tango',
        precio: 800,
        categoria: 'botines',
        img: 'https://http2.mlstatic.com/D_NQ_NP_678645-MLA26526751260_122017-O.webp',
        stock: 5,
        descripcion: "Descripcion del botin"
    },
    {
        id: "5",
        nombre:'Pelota Champions',
        precio: 3500,
        categoria: 'pelotas',
        img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/d9579f43163349249a74aafd00e5ff91_9366/Pelota_UCL_Finale_Estambul_League_UNISEX_Blanco_FH7340_01_standard.jpg',
        stock: 2,
        descripcion: "Descripcion de la pelota"
    }
]




export const getProducts = () =>  {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
            
        }, 600);
    })
}

export const getProductsById = (id) => {

    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        },600)
        
    })
    
}

export const getProductsByCategory = (category) => {
    
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === category))
        },600)

    })

}



