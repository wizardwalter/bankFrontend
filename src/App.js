import React from 'react';
import styles from './App.module.css';
import { BrowserRouter, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import AllData from './components/AllData/AllData';
import Home from './components/Home/Home';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Login from './components/Login/Login';
import Withdraw from './components/Withdraw/Withdraw';
import Deposit from './components/Deposit/Deposit';
import { AuthContext } from './AuthContext';


function App() {
  var userFromStorage = localStorage.getItem("user");
 var parsedUserObj = JSON.parse(userFromStorage);

  const [user, setUser] =React.useState(parsedUserObj)
  const providerValue = {user,setUser}


  return (
    <BrowserRouter>
    <AuthContext.Provider value={providerValue}>
      <NavBar/>
        <div className={styles.container}>
          <div className={styles.row}>
          <Route path="/" exact component={Home}/>
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
          </div>
        </div>     
        </AuthContext.Provider>
    </BrowserRouter> 
  );
}

export default App;
 
