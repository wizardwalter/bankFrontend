import React from 'react';
import {Card, Button, Row} from 'react-bootstrap';
import logo from './logo.png';
import { AuthContext } from '../../AuthContext';



const Home =  () => {
  const {user}             = React.useContext(AuthContext)
 
   return(
    <>
    { user !== null ?
  <Card style={{border: '2px solid black'}}>
    <Row style={{ justifyContent: 'center' }}>
    <Card.Img variant="top" src={logo} style={{ height: '175px', width: '175px' }} />
    </Row>
  <Card.Body style={{ borderBottom : '2px solid black'}}>
    <Card.Text style={{textAlign: "center"}}>
     Hello {user.name} Welcome Back!
    </Card.Text>
  </Card.Body>
</Card> 
  : 
  <Card style={{border: '2px solid black'}}>
  <Row style={{ justifyContent: 'center' }}>
  <Card.Img variant="top" src={logo} style={{ height: '175px', width: '175px' }} />
  </Row>
<Card.Body style={{ borderBottom : '2px solid black'}}>
  <Card.Text style={{textAlign: "center"}}>
  Hello everyone! Welcome to my banking app please proceed to make an account and navigate through the website.
  </Card.Text>
</Card.Body>
<Card.Footer>
  <Row style={{ justifyContent: 'center' }}>
  <Button style={{width: '150px', height: '40px'}} variant="primary"><a style={{color: 'white', textDecoration: 'none'}} href="#/CreateAccount/">Create Account</a></Button>
  </Row>
</Card.Footer>
</Card>
}
</>
  )
};

export default Home;