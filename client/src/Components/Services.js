import React from "react";
import '../Styles/Services.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from 'react-bootstrap/Accordion';
import logoFull from '../Styles/ClipArtfullsizeResized.png'


function Services() {


    return (
      <div className="mx-auto">
      <h2 id="serviceHead">
      Services</h2> 

              <p id="trainingDesc">Training is contigent upon your specific dog, and their particular needs. These packages are outlines to be customized during evaluation.  </p>
              <p id="evalutions">Evaluations are $65 for 1 hour and required before package purchase or board-and-train.</p>
<Accordion> <img className="img-fluid mx-auto d-block" id="fullLogo" src={logoFull} alt="The Traveler's K0 Logo" />
      <Accordion.Item eventKey="0">
        <Accordion.Header>Puppy Package- For 6 month old dogs or YOUNGER</Accordion.Header>
        <Accordion.Body>
        <p>Loose Leash Walking/Heeling, Sit, Down, Stay, Place, Recall, Boundaries</p>
        <strong> 5 lessons (in-home) <span>$625</span>, 7 lessons (in-home plus two public outings) <span>$875</span></strong>
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="1">
        <Accordion.Header>Adult Dog Package- For dogs older than 6 months</Accordion.Header>
        <Accordion.Body>
        <p>Adding Distance, Duration, and Distraction to known behaviors such as Recalls, Stays, Heeling, and Place.</p>
        <strong> 5 lessons <span>$625</span>, 7 lessons (in-home plus two public outings) <span>$875</span></strong>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Advanced Dog Package with E-Collar Training-  For dogs who have completed Adult Dog Package
        content</Accordion.Header>
        <Accordion.Body>
        <p>E-Collar conditioning for Off-Leash Reliability. Adding Distance, Duration, and Distraction to known behaviors such as Recalls, Stays, Heeling, and Place.</p>
      <strong> 5 lessons (in-home lessons to condition E-collar) <span>$675</span>, 7 lessons (in-home plus two public outings to proof E-Collar) <span>$945</span></strong>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Private Lesson</Accordion.Header>
        <Accordion.Body>
        <p>Hour long session at your residency or public dog friendly location. Will work on any desired behavior in the time allocated. Used primarily for behavioral cases.</p>
        <strong><span>$140</span></strong>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>Board and Train- Minimum 1 week for all dogs. Length of stay determined at Evaluation</Accordion.Header>
        <Accordion.Body>
        <p>Board and Train goals established during evaluation. E-Collar Training requires a MINIMUM of a two week stay. Dog's will be living with Trainer with same care and training given to their own personal dogs. Exercise and training requirements will be met during Board and Train. Seperate Board and Train contract available and will need to be signed prior to boarding arrangements.</p>
      <strong> 1 Week <span>$1050 </span>($150/day),   2 Weeks <span>$2100 </span>($150/day),   3 Weeks+ <span>$2940 </span>($140/day)</strong>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>Boarding Only- Only offered for qualified clients. Contact for details and qualification</Accordion.Header>
        <Accordion.Body>
        <p><strong>MUST BE CRATE TRAINED.</strong></p>
       <p>Boarding dogs will practice known behaviors and proper boundaries within the home. They will be exercised and given mental stimulation daily.</p>
        <strong><span>$100</span>/Day Per Dog, <span>$80</span>/Day Per Dog that has completed a Board and Train within the previous 6 months.</strong>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>Group Lessons- Only offered for qualified clients</Accordion.Header>
        <Accordion.Body>
        Qualified Clients include those who have completed minimum evaluation and 3 in-home private lessons. Qualified Clients are determined based on Trainer's evaluation of dog's current skillset and benefit of being in a group setting.
          <p>Group Lesson determined in advance with a 5 member maximum. Location Varies. Group sessions minimum 2 hour duration.</p>
        <strong><span>$80</span>/Group Lesson</strong>
        </Accordion.Body>
      </Accordion.Item>
<br></br>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Mileage Fees</Accordion.Header>
        <Accordion.Body>
        <strong> 20-30 Miles of Service Area <span>$10</span>/Lesson</strong> <br></br>
      <strong>31+ Miles of Service Area<span>$15</span>/Lesson</strong>
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
<h2 id="serviceHead">See you on the bark side!</h2>
</div>         
    )
    }
    
    export default Services;
