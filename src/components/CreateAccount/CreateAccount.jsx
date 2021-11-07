import axios from 'axios';
import React, { useState, useEffect, SyntheticEvent } from 'react';
import { AuthContext } from '../../AuthContext';

import Card from "../../Card";






function CreateAccount(){
  const {user}            = React.useContext(AuthContext)
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const [button, setButton]     = React.useState(true);
   


  
  console.log(user)
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

  function handleCreate(e){
    e.preventDefault();
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if (password.length < 8) return;
    if(validate(name, 'name') && validate(email, 'email') && validate(password, 'password')){
      axios.post('http://localhost:8080/users/create',{name:name, email:email, password:password, balance:0})
      .then(response => setStatus(response.data.message))
    }
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
    setStatus('')
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => {setName(e.currentTarget.value); setButton(false)}} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => {setEmail(e.currentTarget.value); setButton(false)}}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => {setPassword(e.currentTarget.value);setButton(false)}}/><br/>
              <button type="submit" id="submit" className="btn btn-light" disabled={button}  onClick={handleCreate}>Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}

export default CreateAccount

