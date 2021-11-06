import React from 'react';
import './AllData.module.css';
import { Card } from 'react-bootstrap';
import { AuthContext } from '../../App';



function AllData() {
  const ctx = React.useContext(AuthContext);



  const userList = (item: any, index: number) => {
    return (
      <Card key={index} style={{ border: 'solid 2px black', width: '400px', marginBottom: '10px' }}>
        <Card.Body>
          <Card.Title>All Data For User</Card.Title>
          <Card.Text>
            <ul style={{ listStyleType: 'none' }}>
              <li>Name = {JSON.stringify(item.name)}</li>
              <li>Email = {JSON.stringify(item.email)}</li>
              <li>Balance = {JSON.stringify(item.balance)}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }


  return (
    <>
      {ctx.users.map(userList)}
    </>
  );
}

export default AllData;
