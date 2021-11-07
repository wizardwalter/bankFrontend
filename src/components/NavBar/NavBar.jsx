import React from 'react';
import {Link} from 'react-router-dom'
import styles from './NavBar.module.css';
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
  <div className={styles.NavBar} data-testid="NavBar">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">BadBank</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/deposit/">Deposit</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/withdraw/">Withdraw</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/balance/">Balance</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alldata/">Account Balance</Link>
          </li>
          <li className="nav-item"> 
              <Link className="nav-link" onClick={handleLogout} to='/' >Logout</Link>
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
