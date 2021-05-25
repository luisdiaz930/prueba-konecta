import React, {useEffect, useState} from 'react'

const Favoritos = () => {

    const ulr='https://breakingbadapi.com/api/quotes'
    
    const [todos, setTodos]= useState()
    const fetchApi = async () =>{
      const response = await fetch(ulr)
      const responseJSON = await response.json()
      setTodos(responseJSON)
    }
  
    useEffect(() => {    
      fetchApi() 
    }, [])

    return (
        <div className="container">
            <table class="table table-striped table-hover" >
                <tr className="colorinfo">
                    <td><h3>Autor</h3></td>
                    <td><h3>Frases de Autores</h3></td>
                    <td><h3>Calificacion</h3></td>
                
                    
                </tr>

                {
                !todos ? 'cargando...':
                todos.map((todo,index)=>{
                return <tr key={index}> 
                            <td>{todo.author}</td>
                            <td>{todo.quote}</td>
                            <td>⭐⭐</td>					
                        </tr>    
                })
                }     
            </table>             
        </div>
    )
}

export default Favoritos
