import { useState } from "react";
import style from './SearchBar.module.css'
import { BiSearchAlt } from 'react-icons/bi'


export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value);
   }
   return (
      <div className={style.searchBox} >
         <div className={style.search}>
            <input
               className={style.inputCharacters}
               type='search'
               aria-activedescendant="both"
               aria-expanded='false'
               onChange={handleChange} value={id}
               placeholder="Search Character"
            />
         </div>
         <div className={style.add}>
            <button
               className={style.addButton}
               onClick={() => { onSearch(id); setId('') }}
            ><BiSearchAlt size="2rem" /></button>
         </div>
         <style>
            @import url('https://fonts.googleapis.com/css2?family=Blinker:wght@100&display=swap');
         </style>
      </div>
   );
};
