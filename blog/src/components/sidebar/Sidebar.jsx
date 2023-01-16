import './sidebar.css'

export default function Sidebar() {
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
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
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
