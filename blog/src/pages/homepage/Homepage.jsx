import React from "react";
import { useState, useEffect } from "react";
// import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
require('react-dom');

export default function Homepage() {
  const [posts, setPosts] = useState([])
  const {search} = useLocation();
  
  useEffect (() => {
    const fetchPosts = async() => {
      const res = await axios.get("/posts" + search)
      setPosts(res.data)
      console.log(res.data)
    }
    fetchPosts()
  }, [search])
  // const location = useLocation();
  // console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}