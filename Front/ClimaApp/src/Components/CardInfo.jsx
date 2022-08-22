import React from 'react'
import Formulario from './Form'
import './Styles/CardInfo.css'
import { Form, Button, InputGroup } from 'react-bootstrap';

function Inicio({ ubicacion, clima, date, actualizado, onSubmit, setCiudad, pronostico }) {
    return (
        <div className="Card-container">
            <div className='Card-header'>
                <h1 className='Card-titulo'>{ubicacion.regionName} / {ubicacion.city} {clima.temp}°C </h1>
                <h3 className='Card-subtitulo'>{date} <p></p> Estado: {clima.description} </h3>
            </div>
            <Formulario onSubmit={onSubmit} setCiudad={setCiudad} clima={clima} />
            <div className='Card-Body'>
                <h3 className='Card-Body-Items'>Ubicacion: {actualizado.country} / {actualizado.name} </h3>
                <h3 className='Card-Body-Items'>Estado: {actualizado.description} </h3>
                <h3 className='Card-Body-Items'>Temperatura: {actualizado.temp}°C </h3>
                <h3 className='Card-Body-Items'>Sensacion termica: {actualizado.feels_like}°C</h3>
                <h3 className='Card-Body-Items'>Temp. Max: {actualizado.temp_max}°C</h3>
                <h3 className='Card-Body-Items'>Temp. Min: {actualizado.temp_min}°C</h3>
                <h3 className='Card-Body-Items'>Humedad: {actualizado.humidity}%</h3>
                <div className='Cards-container'>
                    <div className='Card-dias'>
                        <h5 className='mt-3' style={{fontSize: "17px"}}> {pronostico.dt_txt1} </h5>
                        <hr />
                        <h5>Max: {pronostico.temp_max1} </h5>
                        <h5>Min: {pronostico.temp_min1} </h5>
                    </div>
                    <div className='Card-dias'>
                        <h5 className='mt-3' style={{fontSize: "17px"}}> {pronostico.dt_txt2} </h5>
                        <hr />
                        <h5>Max: {pronostico.temp_max2} </h5>
                        <h5>Min: {pronostico.temp_min2} </h5>
                    </div>
                    <div className='Card-dias'>
                        <h5 className='mt-3' style={{fontSize: "17px"}}> {pronostico.dt_txt3} </h5>
                        <hr />
                        <h5>Max: {pronostico.temp_max3} </h5>
                        <h5>Min: {pronostico.temp_min3} </h5>
                    </div>
                    <div className='Card-dias'>
                        <h5 className='mt-3' style={{fontSize: "17px"}}> {pronostico.dt_txt4} </h5>
                        <hr />
                        <h5>Max: {pronostico.temp_max4} </h5>
                        <h5>Min: {pronostico.temp_min4} </h5>
                    </div>
                    <div className='Card-dias'>
                        <h5 className='mt-3' style={{fontSize: "17px"}}> {pronostico.dt_txt5} </h5>
                        <hr />
                        <h5>Max: {pronostico.temp_max5} </h5>
                        <h5>Min: {pronostico.temp_min5} </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio