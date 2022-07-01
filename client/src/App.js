import React, {useState} from 'react';
import './App.css';
import AboutMe from './/Components/AboutMe';
import ContactMe from './/Components/ContactMe';
import Photos from './/Components/Photos';
import Services from './/Components/Services';
import Navigation from './Components/Navigation';

function App() {

  const pages =["About Me", "Services", "Contact Me", "Photos/Videos"]
  const [page, setPage] = useState(pages[0])
  return (
    <div className="App">
    <h1>The Traveler's K9</h1>  
    <Navigation pages={pages} page={page} setPage={setPage} />
    {page==="About Me"? <AboutMe /> :null}
    {page==="Services"? <Services /> :null}
    {page==="Contact Me"? <ContactMe /> :null}
    {page==="Photos/Videos"? <Photos /> :null}
    
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
    </div>
  );
}

export default App;

{/* <div class="snowflake">
❄
</div> */}