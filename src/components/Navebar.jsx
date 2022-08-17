import React from "react";
import { Link } from "react-router-dom";
import {FaBars} from "react-icons/fa"
import logo from "./logo.svg"
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
export default function Navebar(){
    const LinksRef =useRef(null)
    const [Togle , setTogle]= useState(false)
    function Change () {
        setTogle(!Togle)
    }
    useEffect (() => {
        if(Togle){
            LinksRef.current.style.height= "auto"
            
        }
        else{
            LinksRef.current.style.height= "0px"
        }

    },[Togle])
 
    return(
        <nav className="navebar">
            <div className="center-container">
                <div className="nav-header">
                  <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>  
                    <button className="bar-btn" onClick={ () => Change()}><FaBars/></button>

                </div>
                <div className="links-container" ref={LinksRef}>
                    <div className="links">
                        <ul>
                            <Link to="/" className="link">Home</Link>
                            <Link to="/about" className="link">About</Link>
                        </ul>
                    </div>
                </div>
            </div>

        </nav>
    )
      
}