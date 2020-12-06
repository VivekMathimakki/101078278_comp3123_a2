import React from 'react';
import axios from 'axios';
import Toronto from './toronto.svg';
import './city.css';

class City extends React.Component{
    constructor(props){
        super(props);
        this.state={
            temp:0,
            weather:'',
            icon:'',
            time:'',
            feels:0,
            sea:0,
            min:0,
            max:0,
            pressure:0,
            humidity:0,
            sunrise:'',
            sunset:'',
            wind:0,
            longitude:0,
            latitude:0
        }
        this.getTime=this.getTime.bind(this);
    }

    componentDidMount(){
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=c054bb140b43fd3e6c5a5cf307c96127")
    .then(resp=>resp.data)
    .then(resp=>this.setState({
            temp:(resp.main.temp-273.15).toFixed(0),
            icon:resp.weather[0].icon,
            weather:resp.weather[0].description,
            time:this.getTime(resp.dt),
            feels:(resp.main.feels_like-273.15).toFixed(0),
            min:(resp.main.temp_min-273.15).toFixed(0),
            max:(resp.main.temp_max-273.15).toFixed(0),
            sea:resp.main.sea_level,
            pressure:resp.main.pressure,
            humidity:resp.main.humidity,
            sunrise:this.getTime(resp.sys.sunrise),
            sunset:this.getTime(resp.sys.sunset),
            wind:resp.wind.speed,
            longitude:resp.coord.lon,
            latitude:resp.coord.lat,
        }))
    }

    getTime(dt){
        let unix_timestamp = dt;
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds.
        var date = new Date(unix_timestamp * 1000);
        // Hours part from the timestamp
        var hours = date.getHours();
        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();

        // Will display time in 10:30:23 format
        var hr=hours
        var dur=''
        if(hr>=0 && hr<=11){
            dur='AM'
        }
        else{
            hr=hr-12
            dur='PM'
        }
        
        var formattedTime = hr + ':' + minutes.substr(-2)+' '+dur;
        return formattedTime;
    }
    render(){
        return(
            
            <div className='city'>
                
                <div className="name">
                    Toronto
                    <img src={`http://openweathermap.org/img/wn/${this.state.icon}@4x.png`}></img><br></br>
                    <div className="time">{this.state.time}</div>
                </div>
                <div className="weather">
                <div className="description">
                    <div className="heading">
                        temperature
                        </div>
                    {this.state.temp} <sup>o<sub>C</sub></sup>
                    </div>
                <div className="description">
                <div className="heading">
                        description
                        </div>
                    {this.state.weather}</div>
                <div className="description">
                <div className="heading">
                        feels like
                        </div>
                    {this.state.feels} <sup>o<sub>C</sub></sup></div>
                
                <div className="description">
                <div className="heading">
                        sea level
                        </div>
                    {this.state.sea}</div>
                <div className="description">
                <div className="heading">
                        temp max
                        </div>
                    {this.state.min} <sup>o<sub>C</sub></sup></div>
                <div className="description">
                <div className="heading">
                        temp min
                        </div>
                    {this.state.max} <sup>o<sub>C</sub></sup></div>
                <div className="description">
                <div className="heading">
                        pressure
                        </div>
                    
                    {this.state.pressure} hPA</div>
                <div className="description">
                <div className="heading">
                        humidity
                        </div>
                    {this.state.humidity} %
                </div>
                
                <div className="description">
                <div className="heading">
                        sunrise
                        </div>
                    {this.state.sunrise}
                </div>
                <div className="description">
                <div className="heading">
                        sunset
                        </div>
                    {this.state.sunset}
                </div>
                <div className="description">
                <div className="heading">
                        wind speed
                        </div>
                    {this.state.wind} m/s
                </div>
                <div className="description">
                <div className="heading">
                        longitude
                        </div>
                    {this.state.longitude}
                </div>
                <div className="description">
                <div className="heading">
                        latitude
                        </div>
                    {this.state.latitude}
                </div>
                </div>
            </div>
            
            
        )
    }
};


export default City;