import { useState } from "react";

export default function SearchBar({ onSearch, randomId }) {
   const [id, setId] = useState('');
   const handleChange = (event) => {
      setId(event.target.value);
   }
   return (
      <div>
         <input type='search' onChange={handleChange} value={id} placeholder="Search Character"/>
         <button onClick={() => { onSearch(id); setId('') }}>Agregar</button>
         <button onClick={randomId}>Random</button>
      </div>
   );
}
