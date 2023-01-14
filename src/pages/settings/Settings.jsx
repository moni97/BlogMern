import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your account</span>
                <span className="settingsDeleteAccount">Delete account</span>
            </div>
            <form action="" className="settingsForm">
                <label htmlFor="">Profile picture</label>
                <div className="settingsPP">
                    <img src="https://images.pexels.com/photos/8322959/pexels-photo-8322959.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="settingsProfilePicture" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}></input>
                </div>
                <label>Username</label>
                <input type="text" placeholder='moni'/>
                <label>Email</label>
                <input type="text" placeholder='moni@uic.edu'/>
                <label>Password</label>
                <input type="password"/>
                <button className="settingsSubmit">
                    Update
                </button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
