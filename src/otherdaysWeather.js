import React, { Component } from "react";
import axios from "axios";

export default class otherdaysWeather extends React.Component {

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

      // La météo des prochains jours
      const daily = this.state.data.daily || {};
      console.log(daily[0].temp);
      console.log(daily[1].temp);
      console.log(daily[2].temp);
      console.log(daily[3].temp);
      console.log(daily[4].temp);
      console.log(daily[5].temp);
      console.log(daily[6].temp);
      console.log(daily[7].temp);


      // Toute la météo de demain
      const tomorrow = data.daily[0];
      console.log(tomorrow.temp.day);

 
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
        <p>Météo de demain : {daily[1].temp} 4° / Pluvieux</p> 
        <img src={img_today}/>
        <p>Météo dans 2 jours : {daily[2].temp} 7.12° / Orageux</p>
        <p>Météo dans 3 jours : {daily[3].temp} 14° / Ensoleillé</p>
        <p>Météo dans 4 jours : {daily[4].temp} 9° / Ensoleillé</p>
      </div>
    );
  } else {
//sinon je retourne ça else
     return(<p>Loading...</p>);
  }
};
