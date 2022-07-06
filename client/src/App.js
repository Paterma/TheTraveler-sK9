import React, {useState} from 'react';
import './App.css';
import AboutMe from './/Components/AboutMe';
import ContactMe from './/Components/ContactMe';
import Photos from './/Components/Photos';
import Services from './/Components/Services';
import Navigation from './Components/Navigation';
import Airbus from './Styles/airbus.png';
import vanLife from './Styles/vanlifeGif.gif'

function App() {

  const pages =["About Me", "Services", "Contact Me", "Photos/Videos"]
  const [page, setPage] = useState(pages[0])
  return (
    
    <div className="App">
    <h1>The Traveler's K9 <img src={vanLife} className="img-fluid" id="vanLife" alt="Van Life"/></h1>  
    <Navigation pages={pages} page={page} setPage={setPage} />
    {page==="About Me"? <AboutMe /> :null}
    {page==="Services"? <Services /> :null}
    {page==="Contact Me"? <ContactMe /> :null}
    {page==="Photos/Videos"? <Photos /> :null}
    <div id='theRest'></div>
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