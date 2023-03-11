import './cities.css'
import City from './components/city/city';
import cityData from "../../../json/cities.json";
import { Container, Row } from 'react-bootstrap';

const Cities = () => {

    return(
        <div>
            <Container>
            {cityData.List.map (content =>(
                <Row className="justify-content-md-center">
                    <City key={content.CityName} name={content.CityName}/>
                </Row>
            ))
            }
            </Container>

        </div>
    )

}
export default Cities;