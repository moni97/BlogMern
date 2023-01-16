import './register.css';
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form action="" className="registerForm">
            <lable>Username</lable>
            <input type="text" className="registerInput" placeholder='enter your username'></input>
            <lable>Email</lable>
            <input type="text" className="registerInput" placeholder='enter your email'></input>
            <lable>Password</lable>
            <input type="password" className="registerInput"/>
            <button className="registerButton"><Link to="/register">Register</Link></button>
        </form>
        <button className="registerLoginButton"><Link className="link" to="/login">Login</Link></button>
    </div>
  )
}
