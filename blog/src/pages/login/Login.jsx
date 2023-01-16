import './login.css';
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form action="" className="loginForm">
            <lable>Email</lable>
            <input type="text" className="loginInput" placeholder='enter your email'></input>
            <lable>Password</lable>
            <input type="password" className="loginInput"/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link className="link" to="/register">Register</Link>
        </button>
    </div>
  )
}
