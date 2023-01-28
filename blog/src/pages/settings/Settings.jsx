import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'
import { useContext} from "react";
import { Context} from "../../context/Context";

export default function Settings() {
    const {user} = useContext(Context)
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
                    <img src={user.prof} alt="" className="settingsProfilePicture" />
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
