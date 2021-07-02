import React from 'react'
import { Layout } from '../../components'
import { useState, useEffect } from 'react'
import { Item } from './Item/item'
import { Loader } from '../../components/Loader/loader'
import { useParams } from 'react-router'
import './home.css'

let catalogo = [
    {
    id: '1',
    title: 'Nvidia Gigabyte GeForce GTX 1050 Ti',
    price: 72000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_878641-MLA40006752150_122019-O.webp',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!',
    stock: 4,
    category: 'nvidia'

},
{
    id: '2',
    title: 'Nvidia Gigabyte GeForce GTX 750 Ti',
    price: 45000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_944810-MLA44420686852_122020-W.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!',
    stock: 6,
    category: 'nvidia'
},
{
    id: '3',
    title: 'Nvidia MSI GeForce 700 Series GT 710',
    price: 15000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_797945-MLA32007295753_082019-O.webp',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!',
    stock: 5,
    category: 'nvidia'
},
{
    id: '4',
    title: 'Nvidia Gigabyte GeForce RTX 20 Series RTX 2060 6GB',
    price: 260000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_920504-MLA32095352421_092019-O.webp',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!',
    stock: 4,
    category: 'nvidia'
},
{
    id: '5',
    title: 'Nvidia Gigabyte GeForce GTX 750 Ti',
    price: 45000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_944810-MLA44420686852_122020-W.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!',
    stock: 5,
    category: 'gygabite'
}
] 
const ItemList = () => {
const { categoriaId } = useParams()
console.log(categoriaId)  
const [productos, setProductos] = useState(undefined)
   
useEffect(() => {
   
    const Promesa = new Promise((res, rej)=>{
        setTimeout(() => {
            res(catalogo)
        }, 2000);
    })
    
    Promesa.then((res) => {
        console.log(res)
        setProductos(res)
    })

}, [])
    
    return(
        <Layout>
            
            <div className='generalHome'>
                <div className="catalogo">
                    { productos ? (   
                      productos.map((valor) =>{
                          if(categoriaId){

                            //NO PUDE FILTRAR POR CATEGORIA; REVISAR

                            // catalogo.filter((item) => (item.category == categoriaId)).map((cate) => {
                            //         return(
                            //             <Item id={cate.id} title={cate.title} pictureUrl={cate.pictureUrl} price={cate.price} stock={cate.stock}/>
        
                            //         )
                            //     })
                           
                            // .map((cate) => {
                            //     return(
                            //         <Item id={cate.id} title={cate.title} pictureUrl={cate.pictureUrl} price={cate.price} stock={cate.stock}/>
    
                            //     )
                            // })
                            
                        
                        
                          }else{
                            return(
                                <Item id={valor.id} title={valor.title} pictureUrl={valor.pictureUrl} price={valor.price} stock={valor.stock}/>
                              )
                          }
                          
                      })
                    ) : <Loader></Loader>
                     
                    }

                </div>
            </div>
        </Layout>
    )
}

export { ItemList, catalogo }
