import React from "react";
import '../Styles/ContactMe.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

function ContactMe() {

    return (
    <div id="contactMe">
        <br></br><br></br><br></br><br></br>
    <ul class="nav justify-content-center">
    <li class="nav-item">
        <a class="nav-link" href="https://www.facebook.com/chloe.pfahl.7" target="_blank"> <BsFacebook size={30}/> </a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="mailto:crimsonpfahl@ghotmail.com"><AiOutlineMail size={30}/></a>
    </li>
    <li class="nav-item">
    <AiOutlinePhone size={30}/> (206)582-8980
    </li>
    <li class="nav-item">
    <a class="nav-link" href="https://www.instagram.com/point_and_wander/" target="_blank"><BsInstagram size={30}/></a>
    </li>
</ul>
    </div>
    )
    }
    
    export default ContactMe;

