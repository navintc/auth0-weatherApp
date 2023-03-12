import './city.css'
import {useState, useEffect} from 'react';
import { getWeatherData } from '../../../../../api/client';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';


const City = (props) => {
     //useState({}) used to make objects which is used for .maps
    //useState([]) is an arrary. they will be not used for maps
    const [cityWeather, setCityWeather] = useState(null);
    const [value,setValue] = useState();

    // the city name came from the props will be used to find weather data
    useEffect(() => {    
        getWeatherData(props.name)
        .then(data => 
            setCityWeather(data)
            // console.log(data)
        )
        .catch(error => console.error(error));
        }, [] //so it'll only be updated if there is change to props.name
        
    );

    //this is used to check whether the async function in the prev useEffect
    //worked properly or not by keeping an eye on to the cityWeather.
    useEffect(() => {
        console.log(cityWeather);
        setValue("k");
      }, [cityWeather]);

    
    // waits until the state is updated
    if (!cityWeather) {
    return <Spinner animation="grow" />;
    }

    return(
        <Col sm={12} md={8} className='city-card'>
            <Card>
                <Card.Header as="h3">{cityWeather.name}</Card.Header>
                <Card.Body>
                    
                    {cityWeather.weather.map(detail => (
                        <h2 className="w-main">Expect {detail.main}</h2>
                    ))}

                    <div className='w-info'>
                        <div className='w-sec-1 col'>
                            <Card.Text>
                                Country: {cityWeather.sys.country}
                                <br></br>
                                Current Temperature is {Math.round(cityWeather.main.temp-273.15)} °C
                            </Card.Text>
                        </div>

                        <div className='w-sec-1 col'>
                            <Card.Text className="tech-data">
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