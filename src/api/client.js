import axios from 'axios';
import {OPENWEATHER_API_KEY as API_KEY, API_URL} from '../CONSTS';

//gets the weather data 
export const getWeatherData = async (cname) => {

  try {
    //making the request
    const response = await axios.get(API_URL, {
      params: {
        q: cname,
        appid: API_KEY
      }
    });

    return response.data;

  } catch (error) {
    console.error(error);
  }
};

