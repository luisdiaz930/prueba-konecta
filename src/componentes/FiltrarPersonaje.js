import React, { useState, useEffect} from 'react';
import TablaPersonaje from './TablaPersonaje';
import 'bootstrap/dist/css/bootstrap.min.css';


require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function FiltrarPersonaje() {

  const [data, setData]=useState([]);
  const [q, setQ]= useState("");
  const [searchColumns, setSearchColumns]= useState(["name","nickname"]);

  useEffect(() => {
    fetch("https://breakingbadapi.com/api/characters/")
    .then((response) => response.json())
    .then((json) => setData(json));
    
  }, []);


  function search(rows){    
    return rows.filter((row) =>
    searchColumns.some(      
         (column) => 
         row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
         )
       );
  }

  const columns = data[0] &&  Object.keys(data[0]);
  return (
    <div className="container"> 
     
        <div className="input-group anchoinfo">  
            <input type="text" aria-label="Last name" className="form-control" value={q} onChange={(e) => setQ(e.target.value)} placeholder="buscar..." />  
        </div>

        <div className="alert alert-info anchoinfo"   role="alert" >
          Seleccione los filtro con los que desea buscar.
        </div> 
          
          {columns &&
            columns.map((column) => (
              <label className="form-check-label" for="flexCheckDefault">
                <br/>
                <div className="form-check">
                <input 
                type="checkbox" 
                checked={searchColumns.includes(column)}
                className="form-check-input"             
                id="flexCheckDefault" 
                autocomplete="off"              
                onChange={(e) => {
                  const checked = searchColumns.includes(column);
                  setSearchColumns((prev) => 
                  checked
                    ? prev.filter((sc) => sc !== column)
                    : [...prev, column]
                    );
                }} />             
                
                {column}
                
                </div>
              </label>
            ))
          }
          <br/><br/>
      
        
      <TablaPersonaje data={search(data)}/>

     
   </div>
  );
}

