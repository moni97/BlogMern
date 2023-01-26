import { useEffect, useState, useContext } from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from "axios";
import './singlePost.css';
import { Context } from "../../context/Context";
export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({})
  const PF = "http://localhost:5000/images/";
  const {user} = useContext(Context);
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [updateMode, setUpdateMode] = useState("")
  useEffect(() => {
    const getPost = async() => {
      const res = await axios.get('/posts/' + path)
      setPost(res.data)
    }
    getPost()
  }, [path])

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/${post._id}`, {data: {username: user.username}});
      window.location.replace("/")
    } catch(err) {}
  }
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        {post && post.photo && 
        <img src={PF+post.photo} alt="" className="singlePostImg" />
        }
        {
          updateMode ? <input type="text" value={post.title} /> : (
        <h1 className="singlePostTitle">
            {post.title}
            {post.username === user?.username && 
            (<div className="singlePostEdit">
                <i class="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true) }></i>
                <i class="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
            </div>)
            }
        </h1>
        )
      }
        <div className="singlePostInfo">
            <span className='singlePostAuthor'>Author: 
              <Link to={`/?user=${post.username}`} className="link">
                <b>{post.username}</b>
              </Link>
            </span>
            <span className='singlePostDate'>Date: {new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className='singlePostDesc'>
        {post.desc}
        </p>
      </div>
    </div>
  )
}
