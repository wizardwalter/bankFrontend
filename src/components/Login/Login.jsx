import axios from 'axios';
import React, { useState, useContext } from 'react';
import Card from "../../Card";
import { AuthContext } from '../../AuthContext';


 function Login(){
  const [show, setShow]         = useState(true);
  const [status, setStatus]     = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [button, setButton]     = useState(true);  
  const {user, setUser}         = useContext(AuthContext)

  

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    } else if(password.length < 8) {
      setStatus(label + 'must be 8 characters or longer'); 
      setTimeout(() => setStatus(''),3000);
    }
      return true;
    
}
   function handleCreate (){
    console.log(email,password);
    let data = {email:email, password:password};
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if (password.length < 8) return;
    if(validate(email, 'email') && validate(password, 'password')){
      axios.post('http://localhost:8080/users/login',data)
    .then( response =>{
      setUser(response.data.user)
      localStorage.setItem('token', response.data.token)
    })
    .catch(error => setStatus(error))
    setShow(false)
  } 
}  
  console.log(user)
  return (
    
    <Card
      bgcolor="warning"
      header="Login"
      status={status}
      body={show ? (  
              <>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {setEmail(e.currentTarget.value); setButton(false)}}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {setPassword(e.currentTarget.value);setButton(false)}}/><br/>
              <button type="submit" id="submit" className="btn btn-light" disabled={button}  onClick={handleCreate}>Login</button>
              </>
            ):(
              <>
              <h5>Successful Login</h5>
              </>
            )}
    />
  )
  
  
}
export default Login



// 
// need to send token to backend to verify and get user... maybe look for react http interceptor... look up how to pass state to other components in react