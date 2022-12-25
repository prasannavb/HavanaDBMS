import React,{useState} from "react";
import { useAuth } from "../contexts/AuthContext";
import {  useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

function NavBar() {
    const { currentUser, logout } = useAuth();
    const ruid=currentUser.uid;
    const remail=currentUser.email;
    const history = useNavigate()
    async function handleLogout() {
     
  
      try {
        await logout()
        history("/login")
      } catch {
        
      }
    }
    console.log("EMAIL ID:\t",remail);
    console.log(ruid);
  
      
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className="container">
                <a className="navbar-brand " href="#">
                    <h3><i className="fa-solid fa-hotel"></i>Havana</h3>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li id="nav-margin" className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li id="nav-margin" className="nav-item">
                            <a className="nav-link active" href="#about">About</a>
                        </li>
                        <li id="nav-margin" className="nav-item dropdown">
                            <Link className="nav-link active" to="/customer-query">Query</Link>
                        </li>
                        <li id="nav-margin" className="nav-item dropdown">
                            <Link className="nav-link active" to="/viewdate">ViewDate</Link>
                        </li>
                        <li id="nav-margin" className="nav-item dropdown">
                            <Link className="nav-link active" to="/viewcustomer">ViewCustomer</Link>
                        </li>
                        <li id="nav-margin" className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#room">Rooms</a>
                        </li>
                        <li id="nav-margin" className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#contact">Contact</a>
                        </li>
                        <li id="nav-margin" className="nav-item">
                            <a className="nav-link" onClick={handleLogout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;