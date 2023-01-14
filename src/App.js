import Homepage from "./pages/homepage/Homepage";
import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import SinglePost from "./components/singlePost/SinglePost";
function App() {
  const user = false;
  return (
    <Router>
      <Fragment>
      <TopBar/>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/register" element ={user ? <Homepage/> : <Register/>}></Route>
          <Route exact path="/login" element={user ? <Homepage/> : <Login/>}></Route>
          <Route exact path="/write" element={user ? <Write />: <Register/>}></Route>
          <Route exact path="/settings" element = {user ? <Settings /> : <Register/>}></Route>
          <Route exact path="/post/:postId" element={<Single />}>
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
