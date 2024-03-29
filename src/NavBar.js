import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "./hooks/useUser";
import {getAuth,signOut} from "firebase/auth"
import { toast } from "react-toastify";
function NavBar() {
  const {user}=useUser();
  const navigate=useNavigate();

  const logout=()=>{
    signOut(getAuth()) 
    navigate("/login")
    toast.success("Log out succesfully")
  }

  
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="/articles">
          <li>Articles</li>
        </Link>

      </ul>

      <div className="nav-right">
      {
        user ? <button onClick={()=>{logout()}}>Log Out</button>:
        <button onClick={()=>{navigate("/login")}}>Login </button>
      }
      </div>
    </nav>
  );
}

export default NavBar;
