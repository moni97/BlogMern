import './register.css';
import { Link } from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username, 
        email, 
        password
      });
      res.data && window.location.replace("/login")
    } catch(err) {
      setError(true)
      console.log(err)
    }
    
  }
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
              type="text" 
              className="registerInput" 
              placeholder='enter your username'
              onChange={e => setUsername(e.target.value)}
              >
              </input>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder='enter your email'
            onChange={e => setEmail(e.target.value)}></input>
            <label>Password</label>
            <input type="password" className="registerInput" onChange={e => setPassword(e.target.value)}/>
            <button className="registerButton" type="submit"><Link to="/register">Register</Link></button>
        </form>
        <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
      {error && <span style={{color: "red", margin: "10px"}}> Something went wrong!</span>}
    </div>
  )
}
