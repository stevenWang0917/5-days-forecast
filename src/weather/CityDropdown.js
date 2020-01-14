import React, { Component } from 'react';
import { CITIES } from '../data_service/config';

import './CityDropdown.scss';

export default class CityDropdown extends Component{

  handleChange = (e) => {
    this.props.handleCityChange(e);
  }

  render(){
    return(
      <>      
        <label htmlFor="cities" className="card-title font-weight-bold mb-1">City</label>
        <select
          id="cities" 
          className="custom-select mr-2 mb-1 rounded-0 boder border-0" 
          value={this.props.currentCity}
          onChange={this.handleChange}>
          {
            CITIES.map(city => 
              <option
                value={city} 
                key={city}>
                {city}
              </option>)
          }
        </select>
      </>
    )
  }
}