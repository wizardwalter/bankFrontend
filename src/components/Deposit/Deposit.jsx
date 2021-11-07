import React, {useRef} from 'react';
import { AuthContext } from "../../AuthContext";
import {Card} from 'react-bootstrap';


import axios from 'axios';

const Deposit = () => {
  const {user,setUser} = React.useContext(AuthContext);
  const [status, setStatus] = React.useState('')
  const [deposit, setDeposit] = React.useState(0);
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
  if (!validate(deposit))  return;
   await setBalance(Number(balance) + Number(deposit));
   await axios.post(`http://localhost:8080/users/setBalance/${user._id}`,{balance:currentState.current})
  .then( (res)=> setUser(res.data.user))
 }
    


  return(
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Balance = { user.balance }</Card.Title>
    <Card.Text>
     <input type="text" value={deposit} onChange={e => {setDeposit(e.currentTarget.value); setButton(false)}} />
    </Card.Text>
    <p>{status}</p>
    <button type='submit' disabled={button} onClick={handleCreate}>Submit</button>
  </Card.Body>
</Card>
  )
 
 };

export default Deposit;
