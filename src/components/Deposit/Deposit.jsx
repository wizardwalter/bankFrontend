import React, {useRef} from 'react';
import { AuthContext } from "../../AuthContext";
import {Card} from 'react-bootstrap';
import styles from './Deposit.module.css'


import axios from 'axios';

const Deposit = () => {
  const {user,setUser} = React.useContext(AuthContext);
  const [status, setStatus] = React.useState('')
  const [deposit, setDeposit] = React.useState(0);
  const [balance, setBalance] = React.useState(user.balance)
  const [button, setButton] = React.useState(true);
  const currentState = useRef()
  const baseUrl = "https://bankbackend101.herokuapp.com/"
  

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
   await axios.post(baseUrl + `users/setBalance/${user._id}`,{balance:currentState.current})
  .then( (res)=> setUser(res.data.user))
 }
    


  return(
    <Card className={styles.depositCard} >
  <Card.Body>
    <h1 className={styles.depositHeader}>Deposit</h1>
    <Card.Text>
      <h5 className={styles.balance}>Balance =<span className={styles.userBalance}> $ { user.balance }</span></h5>
     <input className={styles.input} type="number" value={deposit} onChange={e => {setDeposit(e.currentTarget.value); setButton(false)}} />
    </Card.Text>
    <p>{status}</p>
    <button className={styles.submitButton} type='submit' disabled={button} onClick={handleCreate}>Deposit</button>
  </Card.Body>
</Card>
  )
 
 };

export default Deposit;
