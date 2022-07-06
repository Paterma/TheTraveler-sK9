import React from "react";
import '../Styles/AboutMe.css';
import Chloe from '../Styles/chloepic.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import review1 from '../Styles/review1.png'
import review2 from '../Styles/review2.png'
import review3 from '../Styles/review3.png'



function AboutMe() {

return (
    
<div>
<p id="introParagraph">Welcome to The Traveler's K9! My name is Chloe Pfahl and I have been a professional dog trainer for 6 years now. </p>
<img src={Chloe} className="img-fluid" id="chloeAndAirbus" alt="Chloe and Airbus"/>
<div id="testimonials">
<Carousel autoPlay="true" infiniteLoop="true">
        <div>
                    <img src={review1} />
                </div>
                <div>
                    <img src={review2} />
                </div>
                <div>
                    <img src={review3} />
                </div>
    </Carousel>
</div>
</div>
)
}

export default AboutMe;