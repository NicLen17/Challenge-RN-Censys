import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Inicio from './CardInfo';

function Ubicacion() {
    const [ubicacion, setUbicacion] = useState([]);
    const [clima, setClima] = useState([]);
    const [actualizado, setActualizado] = useState([]);
    const [ciudad, setCiudad] = useState("");
    const [pronostico, setPronostico] = useState([]);

    useEffect(() => {
        axios.get("/location")
            .then(res => {
                const data = res.data;
                setUbicacion(data.location);
            })
    }, []);

    useEffect(() => {
        axios.get("/current")
            .then(res => {
                const data = res.data;
                setClima({
                    temp: data.current.main.temp,
                    temp_max: data.current.main.temp_max,
                    temp_min: data.current.main.temp_min,
                    feels_like: data.current.main.feels_like,
                    description: data.current.weather[0].description,
                    humidity: data.current.main.humidity,
                    city: data.location.city,
                    country: data.location.country,
                    wind_speed: data.current.wind.speed
                });
            })
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ ciudad });

        const nuevaCiudad = ciudad;

        axios.get(`/current/${ciudad}`)
            .then(res => {
                const data = res.data;
                setActualizado({
                    temp: data.current.main.temp,
                    temp_max: data.current.main.temp_max,
                    temp_min: data.current.main.temp_min,
                    feels_like: data.current.main.feels_like,
                    description: data.current.weather[0].description,
                    humidity: data.current.main.humidity,
                    city: data.location.city,
                    country: data.location.country,
                    wind_speed: data.current.wind.speed,
                    name: data.current.name,
                });
            })
        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=2836e5183fbc6ae7a9b949e18eb82dc1&units=metric`)
            .then(res => {
                const data = res.data;
                console.log("🚀 ~ file: Ubicacion.jsx ~ line 43 ~ useEffect ~ data", data)
                setPronostico({
                    temp_max1: data.list[0].main.temp_max,
                    temp_min1: data.list[0].main.temp_min,
                    dt_txt1: data.list[0].dt_txt,

                    temp_max2: data.list[8].main.temp_max,
                    temp_min2: data.list[8].main.temp_min,
                    dt_txt2: data.list[8].dt_txt,

                    temp_max3: data.list[16].main.temp_max,
                    temp_min3: data.list[16].main.temp_min,
                    dt_txt3: data.list[16].dt_txt,

                    temp_max4: data.list[24].main.temp_max,
                    temp_min4: data.list[24].main.temp_min,
                    dt_txt4: data.list[24].dt_txt,

                    temp_max5: data.list[32].main.temp_max,
                    temp_min5: data.list[32].main.temp_min,
                    dt_txt5: data.list[32].dt_txt,
                });
            })
    }

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var date = day + '/' + month + '/' + year;

    return (
        <div className="mt-5 mb-5">
            <Inicio
                onSubmit={onSubmit}
                setCiudad={setCiudad}
                date={date}
                ubicacion={ubicacion}
                clima={clima}
                pronostico={pronostico}
                actualizado={actualizado}
            />
        </div>
    )
}

export default Ubicacion;