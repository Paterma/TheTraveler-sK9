import React from "react";
import '../Styles/AboutMe.css';
import Chloe from '../Styles/chloepic.jpg';


function AboutMe() {

return (
<div>
<p id="introParagraph">Welcome to The Traveler's K9! My name is Chloe Pfahl and I have been a professional dog trainer for 6 years now. </p>
<img src={Chloe} className="img-fluid" alt="Chloe and Airbus"/>
</div>
)
}

export default AboutMe;