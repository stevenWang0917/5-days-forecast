import React, { Component } from 'react';
import { fetchWeatherData } from '../data_service/fetchWeatherData';
import { API, API_KEY, COUNTRY_CODE, DAYS} from '../data_service/config';
import CityDropdown from './CityDropdown';
import OneDayForecast from './OneDayForecast';

import './index.scss';

export default class Weather extends Component{
  constructor(props){
    super(props)
    this.state = {
      currentCity: 'Toronto',
      fiveDaysForecast: null
    }
  }

  weatherData = () => 
    fetchWeatherData(API, this.state.currentCity, COUNTRY_CODE, DAYS, API_KEY)
      .then(data => this.setState({ fiveDaysForecast: data }));

  /* When change a city, fetch weather data of that city. */
  handleCityChange = (e) =>
    this.setState({ currentCity: e.target.value }, ()=>{ this.weatherData() })

  /* When press "Apply" button, fetch new weather data. */
  handleClick = () => this.weatherData()

  /* When press "x" close button on top right corner. */
  handleClose = () => { /* do something in the future */ }

  componentDidMount = () => this.weatherData()

  render() {
    const { fiveDaysForecast, currentCity } = this.state;
    return(
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-10">
            <div className="card-border">
              <div className="card border border-dark rounded-0">
                <div className="card-header bg-dark text-white font-weight-bold rounded-0">
                  <h2>Weather Forecast</h2>
                  <button 
                    type="button" 
                    className="close" 
                    aria-label="Close"  
                    onClick={this.handleClose}>
                  </button>
                </div>
                <div className="card-body card-block">
                  <CityDropdown 
                    handleCityChange={this.handleCityChange}
                    currentCity={currentCity}/>
                  <div className="row">
                  {
                    fiveDaysForecast && fiveDaysForecast.data.map(day =>
                      <div className="col-xl col-lg-3 col-md-4 col-sm-4 col-6" key={day.valid_date}>
                        <OneDayForecast 
                          forecastDetail={day}/>
                      </div>
                    )                  
                  }
                  </div>
                  <div className="d-flex justify-content-end mt-2">
                    <button 
                      className="btn btn-danger rounded-0 px-5" 
                      onClick={this.handleClick}>
                      <span className="button-text">Apply</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}