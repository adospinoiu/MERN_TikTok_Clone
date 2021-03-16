import React from 'react';
import "./Video.css";


function Video() {
    return (
        <div className="video">
            <h1>Video Import</h1>
            
            <video
            className="video__player"
            loop
            src="https://v16m.tiktokcdn.com/f0b00a77e4a06d0924b4a84ccf21520f/5f50173b/vidoe/tos/useast2a/tos-useast2a-ve-0068c003/17791fe438be4573994ff56ebd54a762/?a=1233&br=2618&bt=1309&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009021605210101902092163013B973&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=anRnbGY6bHlsdzMzNzczM0ApOzU3aWRlNWQ6N2Q5OjM4NmdzNWRwZ2liaTBfLS1eMTZzczYwYzBjMGIwMy9gMzVeLjM6Yw%3D%3D&vl=&vr="></video>
            {/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/vz9n-2W33WY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

            {/* VideoFooter */}
            {/* VideoSidebar */}
        </div>
    )
}

export default Video;

