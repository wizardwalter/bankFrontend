import React from 'react';
import './AllData.module.css';
import { Card } from 'react-bootstrap';
import { AuthContext } from '../../AuthContext';



function AllData() {
  const {user} = React.useContext(AuthContext);



  
    return (
      <Card  style={{ border: 'solid 2px black', width: '400px', marginBottom: '10px' }}>
        <Card.Body>
          <Card.Title>{user.name}'s Balance</Card.Title>
          <Card.Text>
            <ul style={{ listStyleType: 'none' }}>
              <li>Name = {user.name}</li>
              <li>Email = {user.email}</li>
              <li>Balance = {JSON.stringify(user.balance)}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  
}

export default AllData;
