import './topbar.css';
import { Link } from "react-router-dom";
import { useContext } from 'react';
import {Context} from "../../context/Context";

export default function TopBar() {
    const {user, dispatch} = useContext(Context);
    const handleLogout = () => {
        dispatch({type: "LOGOUT"})
    }
  return (
    <div className='top'>
        <div className='topLeft'>
            <i class="topIcon fa-brands fa-square-facebook"></i>
            <i class="topIcon fa-brands fa-square-twitter"></i>
            <i class="topIcon fa-brands fa-square-pinterest"></i>
            <i class="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className="topList">
                <li className='topListItem'><Link to="/" className='link'>Home</Link></li>
                <li className='topListItem'><Link to="/" className='link'>About</Link></li>
                <li className='topListItem'><Link to="/" className='link'>Contact</Link></li>
                <li className='topListItem'><Link to="/write" className='link'>Write</Link></li>
                <li className='topListItem' onClick={handleLogout}>{ user && "Logout"}</li>
            </ul>
        </div>
        <div className='topRight'>
            {
                user ? (
                    <Link to="/settings">
                        <img 
                            className="topImg" 
                            src={user.profilePic}
                            alt="">
                        </img>
                    </Link>
                    
                ) : (
                    <ul className="topList">
                        <li className='topListItem'>
                            <Link className='link' to="/login">Login</Link>
                        </li>
                        <li className='topListItem'>
                            <Link className='link' to="/register">Register</Link>
                        </li>
                    </ul>
                )
            }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
