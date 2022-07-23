import React from "react";
import '../Styles/AboutMe.css';
import Chloe from '../Styles/chloepic.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Card from 'react-bootstrap/Card';




function AboutMe() {

return (
    <div class="container">
    
<div class="row align-items-start">
  <h2 id="aboutmeHead">We are emBARKing on a journey...</h2>
	<section class="hero-section__section">
		<div class="hero-section__text">
				<p class="text-justify" id="introParagraph">
        Welcome to my site! I'm Chloe, and I created The Traveler's K9 in 2022 after working professionally with dogs (and other animals) for 6 years. I'm a balanced dog trainer who focuses on all quadrants of operant conditioning. You may be wondering where "Traveler's" come's from- I run a mobile business that allows me to be in remote locations; accommodating a broader array of clients. My passion's include dog sports, thru hikes, and of course traveling with my dog. My mission is to create a profound bond between human and dog, resulting in a well mannered environment.
				</p>
        </div>
		<div class="hero-section__image">
				<picture>
					<img
						src={Chloe}
						alt="Astro Odyssey"
						id="chloeAndAirbus"
					/><p id="photoDesc">(My best boy Erebus and I, completing our thru hike of the Coloardo Trail)</p>
				</picture>
        
		</div>
	</section>
<h2 id="reviewsSection">Reviews</h2>
<Card border="dark" className="mx-auto" style={{ width: '75rem', float:'left', marginTop:'40px' }}>
        {/* <Card.Header>Reviews</Card.Header> */}
        <Card.Body>
          
          <Card.Text class="text-justify">
            "Chloe has been training our German Shepherd on a weekly basis since he was 4 months old. He is 3 y/o now and is extremely well socialized and behaved due to her very professional method of training. We are confident in taking him everywhere and people are truly amazed at his demeanor and response to commands. We still love that she takes him for hikes with others dogs, on leash and off leash. We trust that he will be safe and respected while in her care. He loves being with her on outings to local trails, lakes, and streams. We highly recommend Chloe if you are looking for a well-behaved and well-trained dog!"
          </Card.Text>
          <Card.Title>-Bruce and Mary Conklin</Card.Title>
          <br></br>
          <Card.Text class="text-justify">
            "I was so excited to learn Chloe was starting her own training business. She is truly the best and I cannot recommend her enough!!! She has a way with dogs like I've never seen and we affectionately call her the dog whisperer in our house. She's trained our German Shepherd since she came home from the breeder and has helped to mold the best fur family member I could ever ask for! Our little yorkie loves her too! Our pups love and respect Chloe beyond words. She's the best person to help you become the leader of your pack and have a social and well mannered fur friend. I don't know where we'd be without Chloe but I am so blessed we found her and I give my full trust in her and cannot recommend her enough!"
          </Card.Text>
          <Card.Title>-Debbie Gertie</Card.Title>
        </Card.Body>
      </Card>
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