import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useParams } from 'react-router-dom';

import Comentarios from './Comentarios';


const Personaje = () => {
    //personajes
    const [personaje, setPersonaje] = useState([])
    const {char_id} = useParams()  
    const obtenerPersonaje = async()=>{
        const res = await axios.get(`https://breakingbadapi.com/api/characters/${char_id}`)
        const characters = await res.data
        setPersonaje(characters)
        obtenerFrases()
    
    }

 //frases
    const [frases, setFrases] = useState([])    
    const obtenerFrases = async()=>{
        const res2 = await axios.get('https://breakingbadapi.com/api/quotes/')
        const characters2 = await res2.data
        setFrases(characters2)

    
    }

    useEffect( ()=>{

        obtenerPersonaje()
        
    }, [])

    const getFrasesByAuthor=()=>{
        let frasesAutor=[];
        let component=null;
        personaje.forEach((persona) => 
        {
          frasesAutor= frases.filter((frase)=>{
            return frase.author.includes(persona.name)
          })  
        });
      
        console.log("Frases por autor", frasesAutor);
        if(frasesAutor){
          component=<ul>
          {
            frasesAutor.map((frase)=>{
              return (<li key={frase.quote_id} className="list-group-item">{frase.quote}</li>)
            })
          }</ul>
         
        }
        return component;
      }



      


    return (
     
       <div>
           
        <table class="table">
             {
             personaje.map(item => (
             <td key={item.char_id}>
                 <div className="card" >
                     <img src={item.img} className="img" alt="..." />
                     <div className="card-body">
                         <h5 className="card-title">{item.name}</h5>
                         <p className="card-text"><span className="colorinfo">Apodo: </span>{item.nickname}</p>
                         <p className="card-text"><span className="colorinfo">Cumpleaños: </span>{item.birthday}</p>
                         <p className="card-text"><span className="colorinfo">Ocupacion: </span>{item.occupation}</p>
                         <p className="card-text"><span className="colorinfo">Estado: </span>{item.status}</p>                      
                     </div>
                 </div>      
             </td>  
         ))}

         <td><Comentarios /></td>
         </table>
         <h1>Frases del Autor</h1>   

         
  
        {
                 getFrasesByAuthor()
            
        }

        </div>
    )
}

export default Personaje
