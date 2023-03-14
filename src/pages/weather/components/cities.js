import React from 'react';
import './cities.css'
import City from './components/city/city';
import cityData from "../../../json/cities.json";
import { Container, Row } from 'react-bootstrap';

const Cities = () => {

    return(
        <div>
            <Container className='cities'>
            {cityData.List.map (content =>(
                <Row className="justify-content-md-center" key={content.CityName}>
                    <City name={content.CityName}/>
                </Row>
            ))
            }
            </Container>

        </div>
    )

}
export default Cities;