import React from 'react';
import "./Video.css";


function Video() {
    return (
        <div className="video">
            <h1>Video Import</h1>
            
            <video
            className="video__player"
            loop
            src="https://youtu.be/ktjafK4SgWM"></video>
            {/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/vz9n-2W33WY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

            {/* VideoFooter */}
            {/* VideoSidebar */}
        </div>
    )
}

export default Video;

