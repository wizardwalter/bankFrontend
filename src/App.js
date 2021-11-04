import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import AllData from './components/AllData/AllData';
import Home from './components/Home/Home';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Login from './components/Login/Login';
import Withdraw from './components/Withdraw/Withdraw';
import Deposit from './components/Deposit/Deposit';
import Balance from './components/Balance/Balance';





function App() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

export default App;
export const UserContext = React.createContext(); 
