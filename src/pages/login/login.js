import React from 'react';
import { Button, Col, Row } from "react-bootstrap"
import "./login.css";
import { useAuth0 } from "@auth0/auth0-react";

const Login = ()=>{

    const { loginWithRedirect } = useAuth0();

    return(
        <div className="login-page">
      
            <div className="vertical-center">
                <Row className="justify-content-md-center white-text">
                <Col sm={11} md={5}>
                    <div>
                        <h2 className="white-text" style={{color: 'white'}}>Welcome to the best weather app in the world</h2>
                    </div>
                    <div>
                        <p  style={{color: 'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <Button onClick={() => loginWithRedirect()}>Login</Button>
                </Col>
            </Row>
            </div>


        </div>



    );


}

export default Login;