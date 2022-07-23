import React from "react";
import '../Styles/Footer.css'
import logo from '../Styles/clipartResized.png'
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import Nav from 'react-bootstrap/Nav';

function Footer () {
return (
  <footer>
  <img className="mx-auto d-block" src={logo} id="smallLogo" style={{ marginTop:'80px' }} />
  <Nav className="justify-content-center" activeKey="/home">
  <Nav.Item>
    <Nav.Link href="tel:2065828980"><AiOutlinePhone size={35} color={'black'} style={{ padding: 'none', marginBottom: '10px', marginRight: '25px' }} /></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="mailto:crimsonpfahl@gmail.com"><AiOutlineMail size={35} color={'black'} style={{ padding: 'none', marginBottom: '10px', marginRight: '25px' }}/></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="https://www.facebook.com/chloe.pfahl.7" target="_blank"> <BsFacebook size={35} color={'black'} style={{ padding: 'none', marginBottom: '10px', marginRight: '25px' }}/></Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="https://www.instagram.com/thetravelersk9/" target="_blank"><BsInstagram size={35} color={'black'} style={{ padding: 'none', marginBottom: '10px', marginRight: '25px' }}/></Nav.Link>
  </Nav.Item>
</Nav>
</footer>
);
};
export default Footer;