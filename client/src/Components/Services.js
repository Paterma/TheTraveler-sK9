import React from "react";
import '../Styles/Services.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "./Accordian.js";


function Services() {


    return (
      <div className="mx-auto">
        <h3 id="serviceHead">Services</h3>
            <p id="trainingDesc">Training is contigent upon your specific dog, and their particular needs. These packages are outlines to be customized during evaluation.</p>
            <p id="evalutions">Evaluations are $65 for 1 hour and required before package purchase or board-and-train.</p>
      <Accordion 
        title="Puppy Package- For 6 month old dogs or YOUNGER"
        content="<p>Crate training, Potty Training, Puppy Nipping, Socialization, Name Recognition, Intro to Loose Leash Walking, Sit, Down, and Place</p>
        <strong> 5 lessons (in-home) <span>$500</span>, 7 lessons (in-home plus two public outings) <span>$700</span></strong>"
      />
      <Accordion
        title="Adult Dog Package- For dogs older than 6 months"
        content=" <p>Loose Leash Walking/Heeling, Sit, Down, Stay, Place, Recall, Boundaries</p>
        <strong> 5 lessons (in-home) <span>$625</span>, 7 lessons (in-home plus two public outings) <span>$875</span></strong>"
      />
      <Accordion
        title="Advanced Dog Package with E-Collar Training-  For dogs who have completed Adult Dog Package"
        content="
        <p>E-Collar conditioning for Off-Leash Reliability. Adding Distance, Duration, and Distraction to known behaviors such as Recalls, Stays, Heeling, and Place.</p>
        <strong> 5 lessons (in-home lessons to condition E-collar) <span>$675</span>, 7 lessons (in-home plus two public outings to proof E-Collar) <span>$945</span></strong>
        "
      />
      <Accordion
        title="1 Private Lesson"
        content="  <p>Hour long session at your residency or public dog friendly location. Will work on any desired behavior in the time allocated. Used primarily for behavioral cases.</p>
        <strong><span>$140</span></strong>"
      />
      <Accordion
        title="Board and Train- Minimum 1 week for all dogs. Length of stay determined at Evaluation"
        content="  <p>Board and Train goals established during evaluation. E-Collar Training requires a MINIMUM of a two week stay. Dog's will be living with Trainer with same care and training given to their own personal dogs. Exercise and training requirements will be met during Board and Train. Seperate Board and Train contract available and will need to be signed prior to boarding arrangements.</p>
        <strong> 1 Week <span>$1050</span>($150/day), 2 Weeks <span>$2100</span>($150/day), 3 Weeks+ <span>$2940</span>($140/day)</strong>"
      />
      <Accordion
        title="Boarding Only- Only offered for qualified clients. Contact for details and qualification"
        content="  <p><strong>MUST BE CRATE TRAINED.</strong></p>
        <p>Boarding dogs will practice known behaviors and proper boundaries within the home. They will be exercised and given mental stimulation daily.</p>
        <strong><span>$100</span>/Day Per Dog,<span>$80</span>/Day Per Dog that has completed a Board and Train within the previous 6 months.</strong>"
      />
      <Accordion
        title="Group Lessons- Only offered for qualified clients"
        content=" Qualified Clients include those who have completed minimum evaluation and 3 in-home private lessons. Qualified Clients are determined based on Trainer's evaluation of dog's current skillset and benefit of being in a group setting.
          <p>Group Lesson determined in advance with a 5 member maximum. Location Varies. Group sessions minimum 2 hour duration.</p>
          <strong><span>$80</span>/Group Lesson</strong>"
      />
      <br></br>
      <Accordion
        title="Mileage Fees"
        content=" <strong> 20-30 Miles of Service Area <span>$100</span>/Lesson</strong> <br>
        <strong>31+ Miles of Service Area<span>$15</span>/Lesson</strong> "
      />
    </div>
                
    )
    }
    
    export default Services;


    // function Services() {


    //   var acc = document.getElementsByClassName("accordion");
    //   var i;
      
    //   for (i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function() {
    //       this.classList.toggle("active");
    //       var panel = this.nextElementSibling;
    //       if (panel.style.display === "block") {
    //         panel.style.display = "none";
    //       } else {
    //         panel.style.display = "block";
    //       }
    //     });
    //   }
      
      
    //       return (
    //         <div>
    //   <h1>Services</h1>
    //               <p id="trainingDesc">Training is contigent upon your specific dog, and their particular needs. These packages are outlines to be customized during evaluation.</p>
    //               <p id="evalutions">Evaluations are $65 for 1 hour and required before package purchase or board-and-train.</p>
                  
    //                       <button class="accordion"><strong>Puppy Package- </strong>For 6 month old dogs or YOUNGER</button>
    //                       <div class="panel">
    //                         <p>Crate training, Potty Training, Puppy Nipping, Socialization, Name Recognition, Intro to Loose Leash Walking, Sit, Down, and Place</p>
    //                         <strong> 5 lessons (in-home) <span>$500</span>, 7 lessons (in-home plus two public outings) <span>$700</span></strong>
    //                       </div>
                          
    //                       <button class="accordion"><strong>Adult Dog Package-</strong> For dogs older than 6 months</button>
    //                       <div class="panel">
    //                         <p>Loose Leash Walking/Heeling, Sit, Down, Stay, Place, Recall, Boundaries</p>
    //                         <strong> 5 lessons (in-home) <span>$625</span>, 7 lessons (in-home plus two public outings) <span>$875</span></strong>
    //                       </div>
                          
    //                       <button class="accordion"><strong>Advanced Dog Package with E-Collar Training-</strong>  For dogs who have completed Adult Dog Package</button>
    //                       <div class="panel">
    //                         <p>E-Collar conditioning for Off-Leash Reliability. Adding Distance, Duration, and Distraction to known behaviors such as Recalls, Stays, Heeling, and Place.</p>
    //                         <strong> 5 lessons (in-home lessons to condition E-collar) <span>$675</span>, 7 lessons (in-home plus two public outings to proof E-Collar) <span>$945</span></strong>
    //                       </div>
      
    //                       <button class="accordion"><strong>1 Private Lesson</strong></button>
    //                       <div class="panel">
    //                         <p>Hour long session at your residency or public dog friendly location. Will work on any desired behavior in the time allocated. Used primarily for behavioral cases.</p>
    //                         <strong><span>$140</span></strong>
    //                       </div>
      
    //                       <button class="accordion"> <strong>Board and Train-</strong> Minimum 1 week for all dogs. Length of stay determined at Evaluation</button>
    //                       <div class="panel">
    //                         <p>Board and Train goals established during evaluation. E-Collar Training requires a MINIMUM of a two week stay. Dog's will be living with Trainer with same care and training given to their own personal dogs. Exercise and training requirements will be met during Board and Train. Seperate Board and Train contract available and will need to be signed prior to boarding arrangements.</p>
    //                         <strong> 1 Week <span>$1050</span>($150/day), 2 Weeks <span>$2100</span>($150/day), 3 Weeks+ <span>$2940</span>($140/day)</strong>
    //                       </div>
      
    //                       <button class="accordion"><strong>Boarding Only- </strong>Only offered for qualified clients. Contact for details and qualification</button>
    //                       <div class="panel">
    //                         <p><strong>MUST BE CRATE TRAINED.</strong></p>
    //                         <p>Boarding dogs will practice known behaviors and proper boundaries within the home. They will be exercised and given mental stimulation daily.</p>
    //                         <strong><span>$100</span>/Day Per Dog,<span>$80</span>/Day Per Dog that has completed a Board and Train within the previous 6 months.</strong>
    //                       </div>
      
    //                       <button class="accordion"><strong>Group Lessons-</strong>Only offered for qualified clients. Qualified Clients include those who have completed minimum evaluation and 3 in-home private lessons. Qualified Clients are determined based on Trainer's evaluation of dog's current skillset and benefit of being in a group setting</button>
    //                       <div class="panel">
    //                         <p>Group Lesson determined in advance with a 5 member maximum. Location Varies. Group sessions minimum 2 hour duration.</p>
    //                         <strong><span>$80</span>/Group Lesson</strong>
    //                       </div>
      
    //                       <button class="accordion"><strong>Mileage Fees</strong></button>
    //                       <div class="panel">
                            
    //                         <strong> 20-30 Miles of Service Area <span>$100</span>/Lesson</strong> <br></br>
    //                         <strong>31+ Miles of Service Area<span>$15</span>/Lesson</strong> 
    //                       </div>
    //                       </div>