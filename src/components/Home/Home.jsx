import React from 'react';
import {Card, Button, Row} from 'react-bootstrap';
import logo from './logo.png';
import { AuthContext } from '../../AuthContext';
import './Home.css'



const Home =  () => {
  const {user}             = React.useContext(AuthContext)
 
   return(
    <>
    { user !== null ?
  <Card className='homeCard' style={{border: '2px solid black'}}>
    <div className="row d-flex justify-content-center align-items-center homeRow">
      <div className="col-12 d-flex justify-content-center">
      <img className='homeLogo' src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-bank-urban-infrastructure-inipagistudio-mixed-inipagistudio.png" alt="logo"/>
      </div>
      <div className="col-6">
        <span className="titleSpan">Monroe Bank</span>
      </div>
    </div>
  <Card.Body style={{ borderBottom : '2px solid black'}}>
    <Card.Text style={{textAlign: "center"}}>
     Hello {user.name} Welcome Back!
    </Card.Text>
  </Card.Body>
</Card> 
  : 
  <Card className='homeCard' style={{border: '2px solid black'}}>
  <div className="row d-flex justify-content-center align-items-center homeRow">
      <div className="col-12 d-flex justify-content-center">
      <img className='homeLogo' src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-bank-urban-infrastructure-inipagistudio-mixed-inipagistudio.png" alt="logo"/>
      </div>
      <div className="col-6">
        <span className="titleSpan">Monroe Bank</span>
      </div>
    </div>
<Card.Body style={{ borderBottom : '2px solid black'}}>
  <Card.Text style={{textAlign: "center"}}>
  Hello everyone! Welcome to my banking app please proceed to make an account and navigate through the website.
  </Card.Text>
</Card.Body>
<Card.Footer>
  <Row style={{ justifyContent: 'center' }}>
  <button className="button"><a style={{color: 'white', textDecoration: 'none'}} href="/CreateAccount/">Create Account</a></button>
  </Row>
</Card.Footer>
</Card>
}
</>
  )
};

export default Home;
