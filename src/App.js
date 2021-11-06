import React, {useEffect, useState} from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import AllData from './components/AllData/AllData';
import Home from './components/Home/Home';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Login from './components/Login/Login';
import Withdraw from './components/Withdraw/Withdraw';
import Deposit from './components/Deposit/Deposit';
import Balance from './components/Balance/Balance';
export const AuthContext = React.createContext();




  


function App() {
  
  const globalState                 = React.useContext(AuthContext)
  const [email, setEmail]           =React.useState(null)
  const [name, setName]             =React.useState(null)
  const [balance, setBalance]       =React.useState(null)
  const initialState = {
    userId: localStorage.getItem('userId'),
    token: localStorage.getItem('token'),
    email: email,
    name: name,
    balance: balance
  };
  useEffect(()=>{
    console.log(initialState.userId)
   axios.get(`http://localhost:8080/users/${initialState.userId}`)
        .then(res => {
          setEmail(res.data.email)
          setName(res.data.username)
          setBalance(res.data.balance)
        })
      

  },[])
  
  return (
    <BrowserRouter>
    <AuthContext.Provider value={initialState}>
      <NavBar/>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home}/>
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>     
        </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
 
