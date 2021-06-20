import React from 'react'
import { Layout } from '../../components'
import { useState, useEffect } from 'react'
import { ItemCount } from './ItemCount/ItemCount'
import './home.css'


const Home = () => {
   const [productos, setProductos] = useState([])
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setProductos(data.results)
        })
      }, [])
    

    
    // UTILICE APIS PARA PROBAR. 
    return(
        <Layout>
            
        <div>

            <div className="productos">
            
                    {
                productos.map(valor => {
                    console.log(valor.url)
                    return(
                        
                        <ItemCount stock="5" initial ="1" producto={valor.name}/>
                    )
                })
                }
                
            </div>
        </div>

        </Layout>
    )
}

export { Home }