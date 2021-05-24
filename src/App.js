import React, { useState,useEffect } from 'react';
import Personajes from './componentes/Personajes';
import Personaje from './componentes/Personaje';
import Paginacion from './componentes/Paginacion';
import FiltrarPersonaje from './componentes/FiltrarPersonaje';
import Menu from './componentes/Menu';
import axios from 'axios';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from 'react-router-dom';


function App() {

  const [personajes, setPersonajes] = useState([])  
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      setLoading(true);
      const res = await axios.get('https://breakingbadapi.com/api/characters');
      const characters = res.data     
      setPersonajes(characters)
      setLoading(false);
    };

    obtenerPersonajes();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = personajes.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


  return (
    <div className='container mt-5'>

      <p>holaaaaa</p>
    <Router>
      <Menu />
      <Switch>

        <Route exact path="/">       
          <Personajes personajes={currentPosts} loading={loading} />  
          <Paginacion
          postsPerPage={postsPerPage}
          totalPosts={personajes.length}
          paginate={paginate}      />            
        </Route>

        <Route exact path="/personaje/:char_id">
          <Personaje/>                
        </Route >

        <Route exact path="/filtrarPersonaje">         
          <FiltrarPersonaje />        
        </Route >
      
      </Switch>
    
    </Router>
    </div> 
   
  );
}

export default App;
