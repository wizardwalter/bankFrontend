import React from 'react';
import {Link} from 'react-router-dom'
import './NavBar.css';
import { AuthContext } from '../../AuthContext';

 
const NavBar = () => {
  const {user,setUser}             = React.useContext(AuthContext)

  function handleLogout (){
    localStorage.clear()
    setUser(null)
  }


  return(
    <>
    { user !== null ?
  <div className="row d-flex justify-content-around" data-testid="NavBar">
 <nav className="navbar navbar-expand-lg">
    <div className="col-6 d-flex align-items-center justify-content-around">
    <Link className="navbar-brand" to="/"><img src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-bank-urban-infrastructure-inipagistudio-mixed-inipagistudio.png" alt="logo"/> Monroe Bank</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="link" to="/deposit/">Deposit</Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/withdraw/">Withdraw</Link>
          </li>
          <li className="nav-item">
            <Link className="link" to="/alldata/">Account Balance</Link>
          </li>
          </ul>
      </div>
    </div>
    <div className="col-6 d-flex align-items-center justify-content-end">
      <ul className="navbar-nav">
    <li className="nav-item"> 
              <Link className="link" onClick={handleLogout} to='/' >Logout</Link>
            </li>           
        <span className="navbar-item">
       {user.name}
      </span>
      </ul>
      </div>
  </nav>
  </div>
      :
      <div className="NavBar" data-testid="NavBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/"><img src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-bank-urban-infrastructure-inipagistudio-mixed-inipagistudio.png" alt="logo"/> Monroe Bank</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="link" href="/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="link" href="/login/">Login</a>
            </li>        
          </ul>
        </div>
      </nav>
    </div>
      } 
    </>
    )};

export default NavBar;
