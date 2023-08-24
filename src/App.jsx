import './App.css';
import Cards from './Components/Cards/Cards.jsx';
import Nav from './Components/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';

import { Routes, Route } from 'react-router-dom'
import About from './Components/About/About';
import Detail from './Components/Detail/Detail';
import Error from './Components/Error/Error';


function App() {
   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      // if (!characters.find(character => character.id === Number(id))) {
      if (!characters.some(character => character.id === Number(id))) {
         axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.data)
            .then((data) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  window.alert('¡No hay personajes con este ID!');
               }
            });
      } else {
         alert('Este personaje ya ha sido agregado')
         return;
      }
   }

   const onClose = (id) => {
      setCharacters(characters.filter((character) => character.id !== parseInt(id)));
   }

   function randomHandler() {
      let randomId = (Math.random() * 826).toFixed();
      randomId = parseInt(randomId);
      if (!characters.includes(randomId)) {
         onSearch(randomId)
      } else {
         alert('Este personaje ya ha sido agregado')
         return;
      }
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} randomId={randomHandler} />
         <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;