import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Ciudad from '../components/Home/Ciudad';




const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){ 
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <div className="App">

{/*       
     Se puede hacer de esta forma:
       <Route path='/'>
        <Nav onSearch={onSearch} />
      </Route> */}

  {/* O de esta forma: */}
      <Route
    exact path='/'
    render={() => 
    <Home 
    onSearch={onSearch}  
    cities={cities}
    onClose={onClose}
  />}
      />

   <Route
    exact
    path='/ciudad/:id'
    render={({ciudadId}) => <Ciudad
          onFilter={onFilter}
        />}
   />
    
      <div>
    
      </div>
      <hr />
    </div>
  );
}

export default App;
