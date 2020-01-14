import Axios from 'axios';

export const fetchWeatherData = async (api, city, country, days, api_key) => {
  try{
    const response = 
      await Axios.get(`${api}?city=${city}&country=${country}&days=${days}&key=${api_key}`);
    return response.data;
  } catch(err){
    console.log("Error: ", err);
  }
}