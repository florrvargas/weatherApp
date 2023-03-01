import React from 'react';
import './Home.css'
import Nav from './Nav'
import SearchBar from './SearchBar';
import Cards from './Cards'

export default function Home({onSearch, cities, onClose}) {

  
  return (
    <div className="home">
      <Nav />
      <SearchBar onSearch={onSearch} />
      <Cards
          cities={cities}
          onClose={onClose}
        />
    </div>
  )
}
