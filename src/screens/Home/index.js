import React from 'react'

import { Layout } from '../../components'
import { useState, useEffect } from 'react'
import { ItemCount } from './ItemCount/ItemCount'
import './home.css'


const Home = () => {
   
    // const [buy, setBuy] = useState('Comprar');
    const [result, setResult] = useState('')
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [mensaje, setMensaje] = useState('');
    const [productos, setProductos] = useState([])
    useEffect(() => {
        console.log('useEff viejo')
        fetch("https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search?query=dog", {
        "method": "GET",
        "headers": {
		"x-rapidapi-key": "07c2e2ea30msh4b1d7e9bdde17c6p19ce80jsn8ca32e199b37",
		"x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setProductos(data.results)
        })
      }, [])
    

    const resolveOperation = (operator) =>{
        let newResult;
        switch(operator){
            case '+':
                newResult= parseInt(number1) + parseInt(number2)
                break
            case '-':
                newResult= parseInt(number1 - number2)
                break
            case '*':
                newResult= parseInt(number1 * number2)
                break
            case '/':
                newResult= parseInt(number1 / number2)
                break
        }
        setResult(newResult)
    }
    const showMessage = () =>{
        if(number1 || number2){
            setMensaje("Cambio el numero1 o numero 2")
        }
    }

    // USE EFFECT. PAra buscar algo recien se carga la pagina, sirve para eso. Solo debe teener una por componente
   useEffect((showMessage), [number1, number2])
    // const handleClick = () => {
    //     setBuy('Agregado al carrito')
    //     alert("Bienvenido")
    // }
    // My page principal utilizando mi layout, con nav y footer. "Home" esta en el medio, este es el children
    // que declaramos en el Layout.
    // Podria ser otro componente o simplemente todo lo que querramos que sea de contenido.
    // Pueden poner la cantidad de elementos que quieran dentro de nuestro Layout.

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