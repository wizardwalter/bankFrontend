import React from 'react';
import './AllData.module.css';
import { Card } from 'react-bootstrap';
import { AuthContext } from '../../AuthContext';
import styles from './AllData.module.css'



function AllData() {
  const {user} = React.useContext(AuthContext);



  
    return (
      <Card className={styles.userDataCard} >
        <Card.Body>
          <h3 className={styles.balance}>{user.name}'s Balance</h3>
          <div className={styles.userInfo}>
            <ul style={{ listStyleType: 'none' }}>
              <li>Email: {user.email}</li>
              <li>Balance: {JSON.stringify(user.balance)}</li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    )
  
}

export default AllData;
