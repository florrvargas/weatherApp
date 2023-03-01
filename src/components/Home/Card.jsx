import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card ({min, max, name, img, onClose, id}) {
    return (
      <div className="card">
       
            <button className="row close-btn" onClick={onClose}>X</button>
        <div className="card-body">
          
         <Link to={`/ciudad/${id}`} >
           <h5 className="card-title">{name}</h5>
         </Link>
      
          <div className="info-card">
            <div className="temp">
            <div>
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div >
              <p>Max</p>
              <p>{max}°</p>
            </div>
            </div>
            <div className="">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
