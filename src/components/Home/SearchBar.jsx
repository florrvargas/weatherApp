import React, { useState } from "react";
import './SearchBar.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");

  function onClick(e){
    e.preventDefault();
    onSearch(city);
  }

  return (
    <div className="searchBar">
      <form >
          <input
            type="text"
            placeholder="Ciudad..."
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <button onClick={(e) => {onClick(e)
        }} className="button">
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front text">Buscar</span>
          </button>
      </form>
    </div>
    
  );
}
