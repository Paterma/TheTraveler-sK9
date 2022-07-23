import React from "react";
import '../Styles/ContactMe.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import Card from 'react-bootstrap/Card';
import strawberry from '../Styles/contactairbus.PNG'
import ListGroup from 'react-bootstrap/ListGroup';

function ContactMe() {

    return (
    <div id="contactMe">
      <h2 id="contactHeader">Anything is paw-sible, trust me. I'm a dog-tor.</h2>
      <Card className="text-center justify-conetent-center mx-auto" style={{ maxWidth: '28rem', marginTop: '35px'}}>
      <Card.Img variant="top" src={strawberry} />
      <Card.Body>
        <Card.Title>Contact Me</Card.Title>
        <Card.Text>
        Please reach out to book lessons, board and train, or ask any questions via call, text, or email. Follow me for daily stories on Instagram and Facebook!

        <ListGroup className="list-group-center">
        <ListGroup.Item><a class="nav-link" href="tel:2065828980"><AiOutlinePhone size={30}/> (206) 582-8980</a></ListGroup.Item>

        <ListGroup.Item>
        <a class="nav-link" href="mailto:crimsonpfahl@gmail.com"><AiOutlineMail size={30}/></a></ListGroup.Item>

        <ListGroup.Item>
        <a class="nav-link" href="https://www.facebook.com/chloe.pfahl.7" target="_blank"> <BsFacebook size={30}/></a> </ListGroup.Item>
        <ListGroup.Item>
        <a class="nav-link" href="https://www.instagram.com/thetravelersk9/" target="_blank"><BsInstagram size={30}/></a></ListGroup.Item>

        </ListGroup>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    )
    }
    
    export default ContactMe;

