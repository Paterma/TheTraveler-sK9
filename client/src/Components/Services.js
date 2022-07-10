import React from "react";
import '../Styles/Services.css'
import "bootstrap/dist/css/bootstrap.min.css";


function Services() {

    return (
<div class="accordion" id="accordionExample">
  <p id="trainingDesc">Training is contigent upon your specific dog, and their particular needs. These packages are outlines to be customized during evaluation.</p>
  <p id="evalutions">Evaluations are $65 for 1 hour and required before package purchase or board-and-train.</p>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Puppy Training (must be under 6 months old)
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Puppy socialization, crate training, teething/nipping, potty training, intro to sit, down, place, and loose leash walking. <br></br> <strong> 5 lessons for <span>$500</span>, 7 lessons for <span>$700</span> (includes 2 public outings)</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Adult Dog Training
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Loose leash walking/heeling, sit, down, place, stay, and recall. <br></br> <strong> 5 lessons for <span>$625</span>, 7 lessons for <span>$875</span></strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Advanced Training (after adult dog training)
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      E-Collar training for off-leash capability, the three D's (distance, duration, and distraction) for heeling, recall, place, sit, and down-stay.
      <br></br>
      <strong> 5 lessons for <span>$675</span>, 7 lessons for <span>$945</span> (includes 2 public outings)</strong>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Board and Train
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
Board and train catered to your dog's personal needs. E-collar training is a minimum two week board and train. Maximum 2 dogs at a time to ensure a comfortable environment for all dogs, within my personal home.  Duration of board-and-train determined at eval.
      <br></br>
      <strong><span>$150</span> a day, <span>$1050</span> a week, <span>$2100</span> for a two week board-and-train</strong>
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Board Only
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      House manners practiced, exercised daily, and play time with social dogs allowed. Maximum 2 dogs at a time within my personal home. <strong id="red">Will not take dogs who are deemed unsafe in a crate.</strong> Contact for more details.
      <br></br>
      <strong><span>$100</span> a day, <span> $80</span> a day if they have completed a board-and-train within the past 6 months</strong>
      </div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Group Lessons
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <strong id="soon">Coming soon!</strong>
      </div>
    </div>
  </div>
</div>
    )
    }
    
    export default Services;