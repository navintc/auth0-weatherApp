import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './footer.css';

function Footer() {
    return(
        <div className='footer-box'>
            <div className="">
                <Row>
                    <Col>
                        <p className="footer-txt footer-margin">Developed with 💜 by Navin Thamindu</p>
                    </Col>
                </Row>
            </div>

        </div>
    )

}

export default Footer;
