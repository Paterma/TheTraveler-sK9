import React from "react";
import '../Styles/Photos.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../Styles/photo1.PNG'
import photo2 from '../Styles/photo2.PNG'
import photo3 from '../Styles/photo4.jpg'


function Photos() {

    return (
        <div>
            <h2 id="photosHead">Follow me on Social Media for the most up-to-date photos and videos.</h2>
            <p id="clientPhoto">A priority of mine is to keep my clients updated with progress photos and videos of their pup- so you can always be in-the-know of how your dog is advancing. <br></br> (More photos/videos to come!) </p>
        <Carousel autoPlay="true" infiniteLoop="true">
        <div>
                    <img src={photo1} />
                    <p className="legend">My main squeeze, Erebus</p>
                </div>
                <div>
                    <img src={photo2} />
                    <p className="legend">The Gang ❤️</p>
                </div>
                <div>
                    <img src={photo3} />
                    <p className="legend">Do you even climb?</p>
                </div>
    </Carousel>
    </div>
    )
    }
    
    export default Photos;
