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
            ><FcSearch size="1.4rem" /></button>
         </div>
      </div>
   );
};
