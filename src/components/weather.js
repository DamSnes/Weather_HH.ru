import React from "react";
import "./App.css";
class Weather extends React.Component {
    render() {
        return(
            <div>
            { this.props.city && 
                <div className = "info">
                    <ul>
                    <p>Местоположение: {this.props.city}, {this.props.country}</p>
                    <p>Температура: {this.props.temp}</p>
                    <p>Восход: {this.props.sunrice}</p>
                    <p>Заход: {this.props.sunset}</p>
                    </ul>
                </div>
            }   
            </div>
        );
    }
}

export default Weather;