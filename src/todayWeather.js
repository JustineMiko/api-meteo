import React, { Component } from "react";
import axios from "axios";

class todayWeather extends React.Component {

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

      // La température actuelle 
      const today = this.state.data.current || {};
      console.log(today.temp);
      console.log(today.weather[0].description);

      // La description du jour
      console.log(tomorrow.weather[0].fells_like.weather);

      
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
      const iconToday = data.current.weather[0].icon;
      const imgToday = 'http://openweathermap.org/img/wn/"+today.weather[0].icon+"@2x.png';

        return (
      <div className="App">
        <h1>{this.city}</h1>
        <p>Météo actuelle: {today.temp}° / Ciel dégagé</p>
        <img src={imgToday}/>
      </div>
    );
  } else {
//sinon je retourne ça else
     return(<p>Loading...</p>);
  }
};

ReactDOM.render(
    <todayWeather />,
    document.getElementById('root')
);

export default todayWeather;