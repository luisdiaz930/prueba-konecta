import React from 'react';
import { Link } from 'react-router-dom';




const Personajes = ({ personajes, loading }) => {
    if (loading) {
      return <h2>Cargando...</h2>;
    }


    return (
        
         <div>
         <table class="table table-dark table-striped">
             {personajes.map(item => (
             <td key={item.char_id}>
                 <div class="card" >
                     <img src={item.img} className="card-img-top img" alt="..." />
                     <div class="card-body">
                         <h5 class="card-title">{item.name}</h5>
                         <p class="card-text"><span className="colorinfo">Apodo: </span>{item.nickname}</p>                       
                         <Link class="btn btn-primary" to={`/personaje/${item.char_id}`}>Ver mas informacion</Link>
                     </div>
                 </div>      
             </td>  
         ))}
         </table>
      </div>
    
    )
}


export default Personajes
