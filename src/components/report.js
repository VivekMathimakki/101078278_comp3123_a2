import React from 'react';
import axios from 'axios';
import './report.css';

class Report extends React.Component{
    constructor(props){
        super(props);
        this.state={
            feels:0,
            sea:0,
            min:0,
            max:0,
            pressure:0,
            humidity:0
            
        }
        
    }

    componentDidMount(){
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=c054bb140b43fd3e6c5a5cf307c96127")
    .then(resp=>resp.data)
    .then(resp=>this.setState({
            feels:(resp.main.feels_like-273.15).toFixed(2),
            min:(resp.main.temp_min-273.15).toFixed(2),
            max:(resp.main.temp_max-273.15).toFixed(2),
            sea:(resp.main.sea_level).toFixed(2),
            pressure:(resp.main.pressure).toFixed(2),
            humidity:(resp.main.humidity).toFixed(2),

        }));
    }

    render(){
        return(

            <div className='report'>
                <div className="weather">
                <div className="description">{this.state.temp} <sup>o<sub>C</sub></sup></div>
                <div className="description">{this.state.weather}</div>
                </div>
            </div>
            
            
        )
    }
};


export default Report;