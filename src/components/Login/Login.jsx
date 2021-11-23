import axios from "axios";
import React, { useState, useContext } from "react";
import Card from "../../Card";
import { AuthContext } from "../../AuthContext";
import GoogleLogin from "react-google-login";
import { Button } from "react-bootstrap";
import styles from'./Login.module.css';



function Login() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [button, setButton] = useState(true);
  const { user, setUser } = useContext(AuthContext);

  async function googleSuccess(res) {
   const token  = await res?.tokenId;
    await axios.get(`http://localhost:8080/users/google/${token}`)
    .then( response=>{
      setUser(response.data.user)
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user))
      setShow(false);
    })
    .catch(err => console.log(err));
  }
  function googleFailure(error) {
    console.log('error:',error)
    console.log("Google sign in was unsuccessful, please try again.")
  }

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    } else if (password.length < 8) {
      setStatus(label + "must be 8 characters or longer");
      setTimeout(() => setStatus(""), 3000);
    }
    return true;
  }
  async function handleCreate() {
    console.log(email, password);
    let data = { email: email, password: password };
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    if (password.length < 8) return;
    if (validate(email, "email") && validate(password, "password")) {
      await axios
        .post("http://localhost:8080/users/login", data)
        .then((response) => {
          if (response.data.ok === true) {
            setUser(response.data.user)
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user))
            setShow(false);
          } else {
            setStatus(response.data.message);
            setTimeout(() => setStatus(""), 3000);
          }
        })
        .catch((error) => console.log(error));
    }
  }
  console.log(user);
  return (
    <>
    
    <Card
      header="Login"
      status={status}
      body={
        show ? (
          <>
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
                setButton(false);
              }}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.currentTarget.value);
                setButton(false);
              }}
            />
            <br />
            <button
              type="submit"
              id="submit"
              className={styles.submitButton}
              disabled={button}
              onClick={handleCreate}
            >
              Login
            </button>
            <br />
            <GoogleLogin
              clientId="1037994517915-866vklg7sl4srf912sov3dig06d58mgm.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className={styles.googleButton}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                ><img className="googleimg" src="https://img.icons8.com/clouds/100/000000/google-logo.png" alt="google"/> Google Sign In</button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </>
        ) : (
          <>
            <h5>Successful Login</h5>
          </>
        )
      }
    />
    </>
  );
}
export default Login;

//
// need to send token to backend to verify and get user... maybe look for react http interceptor... look up how to pass state to other components in react
