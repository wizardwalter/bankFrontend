import axios from "axios";
import React from "react";
import { AuthContext } from "../../AuthContext";
import styles from './CreateAccount.module.css'
import GoogleLogin from "react-google-login";
import Card from "../../Card";

function CreateAccount() {
  const { user, setUser } = React.useContext(AuthContext);
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [button, setButton] = React.useState(true);
  const baseUrl = "https://bankbackend101.herokuapp.com/"

  console.log(user);
  async function googleSuccess(res) {
    const token  = await res?.tokenId;
     await axios.post(baseUrl + `users/google/create/${token}`)
     .then( response=>{
       if(response.data.ok){
        setUser(response.data.user)
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user))
        setStatus(response.data.message);
        setShow(false);
       }else{
        setStatus(response.data.message);
        setTimeout(() => setStatus(""), 3000);
       }
       
     })
     .catch(err => console.log(err));
   }
   function googleFailure(error) {
     console.log('error:',error)
     console.log("Google Create Account was unsuccessful, please try again.")
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
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    if (password.length < 8) return;
    if (
      validate(name, "name") &&
      validate(email, "email") &&
      validate(password, "password")
    ) {
      await axios
        .post(baseUrl + "users/create", {
          name: name,
          email: email,
          password: password,
          balance: 0,
        })
        .then((response) => {
          if(response.data.ok){
            setUser(response.data.user);
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            setStatus(response.data.message);
            setShow(false);
          }else{
            setStatus(response.data.message);
            setTimeout(() => setStatus(""), 3000);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
   
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
    setStatus("");
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => {
                setName(e.currentTarget.value);
                setButton(false);
              }}
            />
            <br />
            Email address
            <br />
            <input
              type="email"
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
              Create Account
            </button>
            <br />
            <GoogleLogin
              clientId="1037994517915-866vklg7sl4srf912sov3dig06d58mgm.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className={styles.googleButton}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                ><img className="googleimg" src="https://img.icons8.com/clouds/100/000000/google-logo.png" alt="google"/>Create Account</button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </>
        ) : (
          <>
            <h5>Success</h5>
          </>
        )
      }
    />
  );
}

export default CreateAccount;
