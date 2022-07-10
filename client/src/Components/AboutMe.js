import React from "react";
import '../Styles/AboutMe.css';
import Chloe from '../Styles/chloepic.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import review1 from '../Styles/review1.png'
import review2 from '../Styles/review2.png'
import review3 from '../Styles/review3.png'
import Airbus from '../Styles/photo2.PNG'



function AboutMe() {

return (
    <div class="container">
<div class="row align-items-start">
    <div class="col" id="comments">
    "She is amazing" -Me
    </div>
    <div class="col">
    <p id="introParagraph">Welcome to my site, I'm Chloe, and I created The Traveler's K9 in 2022 after working professionally with dogs (and other animals) for 6 years. I'm a balanced dog trainer who focuses on all quadrants of operant conditioning. You may be wondering where "Traveler's" come's from- I run a mobile business that allows me to be in remote locations; having a broad array of clients. My passion's include dog sports, thru hikes, and of course traveling with my dog. My mission it to create a profound bond between human and dog, resulting in a well mannered environment. </p>
<img src={Chloe} className="img-fluid" id="chloeAndAirbus" alt="Chloe and Airbus"/>
    </div>
    <div class="col" id="trainingPics">
    <img src={Airbus} id="training" />
    </div>
</div>
<div>
</div>
</div>
)
}

export default AboutMe;

{/* <div>
<p id="introParagraph">Welcome to The Traveler's K9! My name is Chloe Pfahl and I have been a professional dog trainer for 6 years now. </p>
<img src={Chloe} className="img-fluid" id="chloeAndAirbus" alt="Chloe and Airbus"/>
<div id="testimonials">
<Carousel autoPlay="true" infiniteLoop="true" showIndicators="false" showArrows="false" transitionTime={5} centerMode="true">
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
</div> */}