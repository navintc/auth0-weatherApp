import logo from './logo.svg';
import './App.css';
import Weather from './pages/weather/weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import { useEffect, useState } from 'react';
import Login from './pages/login/login';
import { useAuth0 } from "@auth0/auth0-react";
import { Col, Row, Spinner } from 'react-bootstrap';

function App() {

  const [loginData, setLoginData] = useState(false);
  // const { user } = useAuth0();

  // useEffect(() => {   
  //   if (loginData === false){
  //     setLoginData(true);
  //   }
  //   }, [user] 
    
  // );
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log(isLoading);


    //loading animation -has a bug

    // if (isLoading) {
    //   return (
    //     <div className='loading-anim'>
    //     <div className="vertical-center loading-row">
    //       <Row className="justify-content-md-center mx-auto">
    //         <Col sm={12} md={12} className="mx-auto">
    //           <Spinner animation="grow" />
    //         </Col>
    //       </Row>
    //     </div>
    //     </div>
      
    //   );
    // }
    
    console.log(user);

  return (
    <div className="App">
      <div className="main-bg"></div>
      <Navbar/>
      {isAuthenticated ? (
        <Weather/>) : (<Login/>) 
      }
     

      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>
      <script>var Alert = ReactBootstrap.Alert;</script>
      
    </div>





  );
}

export default App;
