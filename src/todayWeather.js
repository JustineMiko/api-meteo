import React, { Component } from "react";
import axios from "axios";

export default class todayWeather extends React.Component {

  state = {
    data: {},
    city: '',
    latitude: 0,
    longitude  : 0,
    nextDays: [],
    today: [],
  
  }

  componentDidMount() {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=50.4291723&lon=2.8319805&units=metric&lang=fr&exclude=minutely,hourly,alerts&appid=8c3a54c385c9c9d874d88f2cd6b3dda8')
    .then(res => {
      console.log(res.data);
      const data = res.data;

      // La température actuelle 
      const today = this.state.data.current || {};
      console.log(today.temp);
      console.log(today.weather[0].description);

      // La description du jour
      console.log(tomorrow.weather[0].fells_like.weather);

      
    })
  }

  render() {

      const data = this.state.data
    //checker si data est vide
    //si pas vide this.state.data.current affiche une valeur if

    if(Object.keys(data).length !== 0) {
      const icon_today = data.current.weather[0].icon;
      const img_today = 'http://openweathermap.org/img/wn/${icon_today}@2x.png';

        return (
      <div className="App">
        <h1>Ville de Lens</h1>
        <p>Météo actuelle: {today.temp}° / Ciel dégagé</p>
        <img src={img_today}/>
      </div>
    );
  } else {
//sinon je retourne ça else
     return(<p>Loading...</p>);
  }
};