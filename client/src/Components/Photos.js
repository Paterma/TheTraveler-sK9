import React from "react";
import '../Styles/Photos.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import photo1 from '../Styles/photo1.PNG'
import photo2 from '../Styles/photo2.PNG'
import photo3 from '../Styles/photo4.jpg'
import photo4 from '../Styles/barnhunt.PNG'
import photo5 from '../Styles/4pups.PNG'
import photo6 from '../Styles/magook.PNG'
import photo7 from '../Styles/epups.PNG'
import photo8 from '../Styles/photo5.PNG'
import photo9 from '../Styles/photo6.PNG'
import photo10 from '../Styles/photo7.PNG'
import photo11 from '../Styles/up.PNG'

function Photos() {

    return (
        <div>
            <h2 id="photosHead">Follow me on Social Media for the most up-to-date photos and videos.</h2>
            <p id="clientPhoto">A priority of mine is to keep my clients updated with progress photos and videos of their pup- so you can always be in-the-know of how your dog is advancing. <br></br> (More photos/videos to come!) </p>
        <Carousel autoPlay="true" infiniteLoop="true">
        <div>
                    <img src={photo1} />
                    <p className="legend">My main squeeze</p>
                </div>
                <div>
                    <img src={photo2} />
                    <p className="legend">The Gang ❤️</p>
                </div>
                <div>
                    <img src={photo3} />
                    <p className="legend">Do you even climb?</p>
                </div>
                <div>
                    <img src={photo4} />
                    <p className="legend">Rat problem? Call Erebus</p>
                </div>
                <div>
                    <img src={photo6} />
                    <p className="legend">❤️ Maguyuk ❤️ </p>
                </div>
                <div>
                    <img src={photo5} />
                    <p className="legend">There's always one who isn't looking... </p>
                </div>
                <div>
                    <img src={photo11} />
                    <p className="legend">Look pretty!</p>
                </div>
                <div>
                    <img src={photo7} />
                    <p className="legend">My lip doesn't always get stuck, but when it does... </p>
                </div>
                <div>
                    <img src={photo8} />
                    <p className="legend">Thank goodness for blankets</p>
                </div>
                <div>
                    <img src={photo9} />
                    <p className="legend">Happy pups</p>
                </div>
                <div>
                    <img src={photo10} />
                    <p className="legend">The beginning of our journey on the Colorado Trail!</p>
                </div>
             
    </Carousel>
    </div>
    )
    }
    
    export default Photos;
