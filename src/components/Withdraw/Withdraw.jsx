import React, {useRef} from 'react';
import { AuthContext } from "../../AuthContext";
import {Card} from 'react-bootstrap';

import styles from './Withdraw.module.css';
import axios from 'axios';

const Withdraw = () => {
  const {user,setUser} = React.useContext(AuthContext);
  const [status, setStatus] = React.useState('')
  const [withdraw, setWithdraw] = React.useState(0);
  const [balance, setBalance] = React.useState(user.balance)
  const [button, setButton] = React.useState(true);
  const currentState = useRef()
  

currentState.current = balance;
  function validate(field){
    if (!field) {
      setStatus('Error input field left blank' );
      setTimeout(() => setStatus(''),3000);
    }
    if(!field === (/^\d+$/.test(field))){
      setStatus('Error input must contain only numbers, no + or - either');
      setTimeout(() => setStatus(''),2000);
    }
      return true;
    
}

 async function handleCreate(){
  if (!validate(withdraw))  return;
   await setBalance(Number(balance) - Number(withdraw));
   await axios.post(`http://localhost:8080/users/setBalance/${user._id}`,{balance:currentState.current})
  .then( (res)=> setUser(res.data.user))
 }
    


  return(
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Balance = { user.balance }</Card.Title>
    <Card.Text>
     <input type="text" value={withdraw} onChange={e => {setWithdraw(e.currentTarget.value); setButton(false)}} />
    </Card.Text>
    <p>{status}</p>
    <button type='submit' disabled={button} onClick={handleCreate}>Submit</button>
  </Card.Body>
</Card>
  )
 
 };

export default Withdraw;
