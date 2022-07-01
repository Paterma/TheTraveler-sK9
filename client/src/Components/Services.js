import React from "react";
import '../Styles/Services.css'
import "bootstrap/dist/css/bootstrap.min.css";


function Services() {

    return (
        <div id="servicePage">
    <div id="serviceList">
        <h2 id="serviceHead">Services</h2>
        <ol class="list-group list-group-numbered" id="serviceList">
  <li class="list-group-item d-flex justify-content-between align-items-start" id="serviceList">
    <div class="ms-2 me-auto" id="serviceList">
      <div class="fw-bold" id="serviceList">Puppy Training</div>
      Description
    </div>
    <span class="badge bg-success rounded-pill">$120</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start" id="serviceList">
    <div class="ms-2 me-auto" id="serviceList">
      <div class="fw-bold" id="serviceList">Dog Training</div>
      Description
    </div>
    <span class="badge bg-dark rounded-pill" >$130</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start" id="serviceList">
    <div class="ms-2 me-auto" id="serviceList">
      <div class="fw-bold" id="serviceList">Board and Train</div>
      Description
    </div>
    <span class="badge bg-secondary rounded-pill">$180</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start" id="serviceList">
    <div class="ms-2 me-auto" id="serviceList">
      <div class="fw-bold" id="serviceList">Board Only</div>
      Description
    </div>
    <span class="badge bg-dark rounded-pill" >$180</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start" id="serviceList">
    <div class="ms-2 me-auto" id="serviceList">
      <div class="fw-bold" id="serviceList">Package Deals</div>
      Description
    </div>
    <span class="badge bg-dark rounded-pill" >$600</span>
  </li>
</ol>
    </div>
    </div>
    )
    }
    
    export default Services;