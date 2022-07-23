import React, {useState} from 'react';
import './App.css';
import AboutMe from './/Components/AboutMe';
import ContactMe from './/Components/ContactMe';
import Photos from './/Components/Photos';
import Services from './/Components/Services';
import Navigation from './Components/Navigation';
import Airbus from './Styles/airbus.png';
import vanLife from './Styles/vanlifeGif.gif'
import {Helmet} from "react-helmet";

import Footer from './/Components/Footer'

function App() {

  const pages =["About Me", "Services", "Contact Me", "Photos/Videos"]
  const [page, setPage] = useState(pages[0])
  return (
    
    <div className="App">

      
      <Helmet>
                <meta charSet="utf-8" />
                <title>The Traveler's K9</title>
                <meta name="The Traveler's K9" content="Welcome to my site, I'm Chloe Pfahl, and I created The Traveler's K9 in 2022 after working professionally with dogs (and other animals) for 6 years. I'm a balanced dog trainer who focuses on all quadrants of operant conditioning. You may be wondering where Traveler's come's from- I run a mobile business that allows me to be in remote locations; having a broad array of clients. My passion's include dog sports, thru hikes, and of course traveling with my dog. My mission it to create a profound bond between human and dog, resulting in a well mannered environment. Training services include Crate training, Potty Training, Puppy Nipping, Socialization, Name Recognition, Intro to Loose Leash Walking, Sit, Down, Place, Heeling, Recall, Boundaries, Off-Leash Reliability, E-Collar training, and behavior. I work with puppies puppies and adult dogs for in-home lessons, public outings, board-and-trains, and group lessons." />
                <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>


    <h1 class="text-center">The Traveler's K9 <img src={vanLife} className="img-fluid" id="vanLife" alt="Van Life"/></h1>  
    <Navigation pages={pages} page={page} setPage={setPage} />
    {page==="About Me"? <AboutMe /> :null}
    {page==="Services"? <Services /> :null}
    {page==="Contact Me"? <ContactMe /> :null}
    {page==="Photos/Videos"? <Photos /> :null}
    {/* <div id='theRest'></div> */}
<Footer/>
    </div>
  );
}

export default App;


{/* <div class="snowflakes" aria-hidden="true">
  <div class="snowflake">
  🐾
  </div>
  <div class="snowflake">
  🐾
  </div>
  <div class="snowflake">
  🐾
  </div>
  <div class="snowflake">
  🐕
  </div>
  <div class="snowflake">
  🐕
  </div>
  <div class="snowflake">
  🍂
  </div>
  <div class="snowflake">
  🍃
  </div>
  <div class="snowflake">
  🍂
  </div>
  <div class="snowflake">
  🍂
  </div>
  <div class="snowflake">
  🍃
  </div>
</div> */}
{/* <div class="snowflake">
❄
</div> */}