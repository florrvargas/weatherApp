import React from "react";
import { useParams } from "react-router-dom";
import './Ciudad.css';
import despejado from '../../img/despejado.jpg';
import lluvia from '../../img/lluvia.jpg';
import nublado from '../../img/nublado.jpg'
import tormenta from '../../img/tormenta.jpg';
import nieve from '../../img/nieve.jpg'

export default function Ciudad({onFilter}) {

    // acceder al parametro
    // useParams() --> objeto que adentro tiene (entre otras cosas) los parametros --> {id: 'algo'}
    // destructuro dentro de ese objeto el id
    const {id} = useParams();
    var city = onFilter(id);
    
    // filtrar las ciudades para conseguir lo que tenems que mostrar

     // agrego un ternario
    if(city){
    return (
        <div className="ciudad">
            <div className="container-card shadow">
                <h2>{city.name}</h2>
                <div className="info">
                    <div>Temperatura: {city.temp} ºC</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind} km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                </div>
            </div>
            {
                city.weather=== 'Clear'? <img className="img-weather" src={despejado} alt="" /> :city.weather==='Storm' ? <img className="img-weather" src={tormenta} alt="" />: city.weather==='Rain' ?<img className="img-weather"g src={lluvia} alt="" /> : city.weather==='Clouds' ? <img className="img-weather" src={nublado} alt="" /> : 
                <img className="img-weather" src={nieve} alt="" />
            }
            
        </div>
    )
    } else {
        return (
            <div>
                <h1>No se encontro la ciudad</h1>
            </div>
        )
    }

}