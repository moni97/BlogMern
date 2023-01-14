import './header.css';

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
          <span className='headerTitleSm'>React & Node</span>
          <span className='headerTitleLg'>Blog</span>
        </div>
        <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60https://images.pexels.com/photos/4247412/pexels-photo-4247412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="headerImg" />
    </div>
  )
}
