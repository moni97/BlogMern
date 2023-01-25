import './sidebar.css'
import {useState} from "react";
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Sidebar() {
    const [cats, setCats] = useState([])
    useEffect(() => {
        const getCats = async() => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">About me</span>
            <img src="https://images.pexels.com/photos/4917810/pexels-photo-4917810.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="sidebarImage" />
            <p>
                Lorem ipsum.Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                {cats.map((c) => (
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                    
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">Follow us</span>
            <div className="sidebarSocial">
            <i class="sidebarIcon fa-brands fa-square-facebook"></i>
            <i class="sidebarIcon fa-brands fa-square-twitter"></i>
            <i class="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i class="sidebarIcon fa-brands fa-square-instagram"></i>
            </div>
        </div>
    </div>
  )
}
