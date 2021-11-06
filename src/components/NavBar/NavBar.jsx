import React from 'react';
import styles from './NavBar.module.css';
import { AuthContext } from '../../App';

 
const NavBar = () => {
  const globalState             = React.useContext(AuthContext)

  function handleLogout (){
    localStorage.clear()
  }


  return(
    <>
    { globalState.name !== null ?
  <div className={styles.NavBar} data-testid="NavBar">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/balance/">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/alldata/">AllData</a>
          </li>
          <li className="nav-item"> 
              <a className="nav-link" onClick={handleLogout} href='/' >Logout</a>
            </li>           
        </ul>
      </div>
    </nav>
  </div>
      :
      <div className={styles.NavBar} data-testid="NavBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login/">Login</a>
            </li>        
          </ul>
        </div>
      </nav>
    </div>
      } 
    </>
    )};

export default NavBar;
