import './city.css'
import {useState, useEffect} from 'react';
import { getWeatherData } from '../../../../../api/client';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const City = (props) => {
    
    const [cityWeather, setCityWeather] = useState([]);

    // the city name came from the props will be used to find weather data
    useEffect(() => {    
        getWeatherData(props.name)
        .then(data => 
            setCityWeather(data)
            // console.log(data)
        )
        .catch(error => console.error(error));
        }, [props.name] //so it'll only be updated if there is change to props.name
        
    );

    //this is used to check whether the async function in the prev useEffect
    //worked properly or not by keeping an eye on to the cityWeather.
    useEffect(() => {
        console.log(cityWeather);
      }, [cityWeather]);

    

    return(

        <Col sm={12} md={8} className='city-card'>
            <Card>
                <Card.Header as="h5">{cityWeather.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

                
      
    )
}
export default City;