import React, { Component } from 'react';
import Moment from 'moment';

import './OneDayForecast.scss'

export default class OneDayFroecast extends Component{
  render(){
    const { forecastDetail } = this.props;
    const day = Moment(forecastDetail.valid_date).format("dddd");
    const date = Moment(forecastDetail.valid_date).format("MMM DD");
    return(
      <div className="card border-0">
        <div className="card-body">
          <div className="d-flex justify-content-center">
            <p className="card-text text-center font-weight-bold">
              {day} <br/>
              {date}
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <img
              className="card-img" 
              src={`${process.env.PUBLIC_URL}/icons_weather/${forecastDetail.weather.icon}.png`} 
              alt={forecastDetail.weather.description}/>
          </div>
          <div className="d-flex justify-content-center">
            <p className="card-text">
              {forecastDetail.app_max_temp}&#8451;
            </p>
          </div>
        </div>
      </div>
    )
  }
}