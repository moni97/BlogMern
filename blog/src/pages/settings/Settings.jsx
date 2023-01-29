import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'
import { useState, useContext} from "react";
import { Context} from "../../context/Context";
import axios from 'axios';

export default function Settings() {
    const [file, setFile] = useState(null)
    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [success, setSuccess] = useState(false)
    const {user, dispatch} = useContext(Context)
    const pf = "https://localhost:5000/images"

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type: "UPDATE_START"})
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        }

        if(file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file)
            updatedUser.profilePic = filename;
            try {
                await axios.post("/upload", data);
            } catch(err) {
            }
        }
        try {
            const res = await axios.put("/users/"+user._id, updatedUser);
            setSuccess(true)
            dispatch({type: "UPDATE_SUCCESS", payload: res.datad})
        } catch(err) {
            dispatch({type: "UPDATE_FAILURE"})
        }
    }
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your account</span>
                <span className="settingsDeleteAccount">Delete account</span>
            </div>
            <form action="" className="settingsForm" onSubmit={handleSubmit}>
                <label htmlFor="">Profile picture</label>
                <div className="settingsPP">
                    <img src={file ? URL.createObjectURL(file) : user.profilePic} alt="" className="settingsProfilePicture" />
                    <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input 
                        type="file" 
                        id="fileInput" 
                        style={{display: "none"}}
                        onChange={(e) => setFile(e.target.files[0])}
                    >
                    </input>
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="text" placeholder={user.email} onChange={e => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
                <button className="settingsSubmit" type="submit">
                    Update
                </button>
                {success && <span style={{color: "green"}}>Profile has been updated....</span>}
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
