import React from 'react';
import './city.css'
import {useState, useEffect} from 'react';
import { getWeatherData } from '../../../../../api/client';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import PropTypes from 'prop-types';

const City = (props) => {
     //useState({}) used to make objects which is used for .maps
    //useState([]) is an arrary. they will be not used for maps
    const [cityWeather, setCityWeather] = useState(null);
    const [shouldFetch, setShouldFetch] = useState(true);

    City.propTypes = {
        // validate the 'name' prop
        name: PropTypes.string.isRequired, 
    };

    // the city name came from the props will be used to find weather data
    useEffect(() => {   
        if (shouldFetch === true){
            getWeatherData(props.name)
            .then(data =>{
                setCityWeather(data);
               
            }
            )
            .catch(error => console.error(error));
        }
        }, [shouldFetch, props.name] //so it'll only be updated if there is change to shouldFetch
        
    );

    //this is used to check whether the async function in the prev useEffect
    //worked properly or not by keeping an eye on to the cityWeather.
    useEffect(() => {
       
        const intervalId = setInterval(() => {
            setCityWeather(null);   
            setShouldFetch(true);
          }, 5 * 60 * 1000); // check every 5 mins
           
          return () => {
            clearInterval(intervalId);
          };
      }, [cityWeather]);

    // waits until the state is updated
    if (!cityWeather) {
    return (
        <Col sm={12} md={8} className='city-card'>
        <Card>
            <Card.Header as="h3">Loading Latest Data</Card.Header>
            <Card.Body>
                <Spinner animation="grow" />
                </Card.Body>
            </Card>
        </Col>
        );
    }

    if (shouldFetch === true){
        setTimeout(() => {
            setShouldFetch(false);
            
          }, 3000);
    }

    return(
        <Col sm={12} md={8} className='city-card'>
            <Card>
                <Card.Header as="h3">{cityWeather.name}</Card.Header>
                <Card.Body>
                    
                    {cityWeather.weather.map(detail => (
                        <h2 key={detail.main} className="w-main">Expect {detail.main}</h2>
                    ))}

                    <div className='w-info'>
                        <div className='w-sec-1 col min-dataset'>
                            <Card.Text>
                                Country: {cityWeather.sys.country}
                                <img src={`https://flagsapi.com/${cityWeather.sys.country}/flat/16.png`} className="flag-img"></img>
                                <br></br>
                                {/* rounding and converting kelvin to celcius */}
                                Current Temperature is {Math.round(cityWeather.main.temp-273.15)} °C
                                <br></br>
                                <div className='idnum'>
                                    ID: {cityWeather.id}
                                </div>
                                
                            </Card.Text>
                        </div>

                        <div className='w-sec-1 col'>
                            <Card.Text className="tech-data">
                                WindSpeed: {cityWeather.wind.speed}
                                <br></br>
                                Longtitude: {cityWeather.coord.lon} | Latitude: {cityWeather.coord.lat}                            
                                <br></br>
                                TimeZone: {cityWeather.timezone}
                                <br></br>
                                Pressure: {cityWeather.main.pressure}
                            </Card.Text>
                        </div>
                    </div>

                </Card.Body>
            </Card>
        </Col>
    )
}
export default City;