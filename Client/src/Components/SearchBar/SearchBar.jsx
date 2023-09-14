import { useState } from "react";
import style from './SearchBar.module.css'
import { FcSearch } from 'react-icons/fc'


export default function SearchBar({ onSearch }) {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value);
   }
   return (
      <div className={style.searchBox} >
         <div className={style.inputSearch}>
            <input
               className={style.inputCharacter}
               type='search'
               aria-activedescendant="both"
               aria-expanded='false'
               onChange={handleChange} value={id}
               placeholder="Search Character"
            />
         </div>
         <div className={style.radio}>
            <button className={style.add} onClick={() => { onSearch(id); setId('') }}><FcSearch size="1.4rem" /> Agregar</button>
         </div>
      </div>
   );
}
