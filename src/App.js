import React from 'react';
import './App.css';
import Weather from './pages/weather/weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Login from './pages/login/login';
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const { isAuthenticated} = useAuth0();

    //loading animation -has a bug

  // const { isAuthenticated, isLoading } = useAuth0();

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

  return (
    <div className="App">
      <div className="main-bg"></div>
      <Navbar/>
      {isAuthenticated ? (
        <Weather/>) : (<Login/>) 
      }

      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossOrigin></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossOrigin></script>
      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossOrigin></script>
      <script>var Alert = ReactBootstrap.Alert;</script>
      
    </div>
  );
}

export default App;
