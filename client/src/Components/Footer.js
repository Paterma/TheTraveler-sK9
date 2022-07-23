import React from "react";
import '../Styles/Footer.css'
import logo from '../Styles/clipart.png'
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

function Footer () {
return (
<footer>
<ul class="nav nav-pills flex-column flex-sm-row mx-auto">

<li class="nav-item">
 <img className="img-fluid" src={logo} id="smallLogo" style={{ height: '25rem' }} />
 </li>

  <li class="nav-item">
    <a class="nav-link" href="tel:2065828980"><AiOutlinePhone size={30} color={'black'}/></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="mailto:crimsonpfahl@gmail.com"><AiOutlineMail size={30} color={'black'}/></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://www.facebook.com/chloe.pfahl.7" target="_blank"> <BsFacebook size={30} color={'black'}/></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="https://www.instagram.com/thetravelersk9/" target="_blank"><BsInstagram size={30} color={'black'}/></a>
  </li>
</ul>
		</footer> 
);
};
export default Footer;
