import React from 'react';
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
  const [user, setUser] =React.useState(null)
  const providerValue = {user,setUser}
  return (
    
    <BrowserRouter>
    <AuthContext.Provider value={providerValue}>
      <NavBar/>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home}/>
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/alldata/" component={AllData} />
        </div>     
        </AuthContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;
 
