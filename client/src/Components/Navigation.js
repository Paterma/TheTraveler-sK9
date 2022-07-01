import React, { useState } from "react";
import '../Styles/Navigation.css'
import "bootstrap/dist/css/bootstrap.min.css";


function Navigation(props) {
    const {pages=[], setPage, page} = props;
    const [activeNav, setActiveNav] = useState("#")

    return(
<nav className="navbar navbar-expand-lg justify-content-center">

<br></br>
    <div className="">
        <ul className="navbar-nav align-items-center">
    <a 
        onClick={() => setActiveNav("#aboutMe")}
        className={activeNav === "#aboutMe" ? "active" : ""}
    ><li className="nav-item" >
            <button id='About' onClick={() => setPage(pages[0])}>{pages[0]}</button>
        </li></a>
        <a 
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
        ><li className="nav-item" >
        <button id='Work' onClick={() => setPage(pages[1])}>{pages[1]}</button>
        </li></a>
        <li className="nav-item" >
            <button id='contactMe' onClick={() => setPage(pages[2])}>{pages[2]}</button>
        </li>
        <li className="nav-item" >
            <button onClick={() => setPage(pages[3])}>{pages[3]}</button>
        </li>
        </ul>
    </div>
</nav>
    )
}

export default Navigation