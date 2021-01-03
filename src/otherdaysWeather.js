import React, { Component } from "react";
import axios from "axios";

class otherdaysWeather extends React.Component {

  state = {
    data: {},
    city: '',
    latitude: 0,
    longitude  : 0,
    day: [],
  
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

  handleChange = (event) => {
    this.setState({
      city: event.target.value
    })
}

  render() {

      const data = this.state.data
    //checker si data est vide
    //si pas vide this.state.data.current affiche une valeur if

    if(Object.keys(data).length !== 0) {
      const iconTomorrow = data.current.weather[1].icon;
      const imgTomorrow = 'http://openweathermap.org/img/wn/"+today.weather[1].icon+"@2x.png';
      const iconInTwoDays = data.current.weather[2].icon;
      const imgInTwoDays = 'http://openweathermap.org/img/wn/"+today.weather[2].icon+"@2x.png';
      const iconInThreeDays = data.current.weather[3].icon;
      const imgInThreeDays = 'http://openweathermap.org/img/wn/"+today.weather[3].icon+"@2x.png';
      const iconInFourDays = data.current.weather[4].icon;
      const imgInFourDays = 'http://openweathermap.org/img/wn/"+today.weather[4].icon+"@2x.png';


        return (
      <div className="App">
        <h1>{this.city}</h1>
        <p>Météo de demain : {daily[1].temp} 4° / Pluvieux</p> 
        <img src={imgTomorrow}/>
        <p>Météo dans 2 jours : {daily[2].temp} 7.12° / Orageux</p>
        <img src={imgInTwoDays}/>
        <p>Météo dans 3 jours : {daily[3].temp} 14° / Ensoleillé</p>
        <img src={imgInThreeDays}/>
        <p>Météo dans 4 jours : {daily[4].temp} 9° / Ensoleillé</p>
        <img src={imgInFourDays}/>
      </div>
    );
  } else {
//sinon je retourne ça else
     return(<p>Loading...</p>);
  }
};

ReactDOM.render(
    <otherdaysWeather />,
    document.getElementById('root')
);

export default otherdaysWeather;