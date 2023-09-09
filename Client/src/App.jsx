import './App.css';
import Cards from './Components/Cards/Cards.jsx';
import Nav from './Components/Nav/Nav';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import About from './views/About/About';
import Detail from './views/Detail/Detail';
import Error from './Components/Error/Error';
import Form from './views/Form/Form';
import Favorites from './Components/Favorites/favorites';


function App() {

   const [characters, setCharacters] = useState([]);

   const onSearch = (id) => {
      // if (!characters.find(character => character.id === Number(id))) {
      if (!characters.some(character => character.id === Number(id))) {
         axios(`http://localhost:3001/rickandmorty/character/${id}`)
            .then(response => response.data)
            .then((data) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  alert('¡No hay personajes con este ID!');
               }
            });
      } else {
         alert('Este personaje ya ha sido agregado');
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

   const navigate = useNavigate();
   const [access, setAccess] = useState(false)
   // const EMAIL = 'hh.robinson95@hotmail.com'
   // const PASSWORD = 'Kiwii9'

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`)
         .then((response) => response.data)
         .then((data) => {
            const { access } = data;
            setAccess(data);
            access && navigate('/home');
         });
   };

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   // Mientras no estemos en barrita que nuesto acces este en true
   // en caso de que nos vayamos a barrita (logOut) nos mantenga en abrrita
   function logOut() {
      setAccess(false);
      navigate('/')
   }

   // function noMove () {
   //    if (location.pathname === '/' && setAccess(false)) {
   //       useEffect(() => {
   //          !access && navigate('*');
   //       }, [access]);
   //    }
   // }

   const location = useLocation()

   return (
      <div className='App'>
         {/* {pathname !== "/" ? <Nav onSearch={onSearch} randomId={randomHandler} /> : null} */}
         {location.pathname !== "/" && <Nav onSearch={onSearch} randomId={randomHandler} logOut={logOut} /*noMove={noMove}*/ />}
         <Routes>
            <Route path='/' element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
            <Route path='/about' element={<About />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Error />} />
         </Routes>
      </div>
   );
}

export default App;