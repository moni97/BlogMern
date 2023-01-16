import './topbar.css';
import { Link } from "react-router-dom";

export default function TopBar() {
    const user = false;
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
                <li className='topListItem'>{ user && "Logout"}</li>
            </ul>
        </div>
        <div className='topRight'>
            {
                user ? (
                    <img 
                    className="topImg" 
                    src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Free-Download.png"
                    alt="">
                </img>
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
