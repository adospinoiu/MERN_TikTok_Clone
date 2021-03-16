import React from 'react';
import "./Video.css";


function Video() {
    return (
        <div className="video">
            <video
            className="video__player"
            loop
            src="https://v16-web.tiktok.com/video/tos/useast2a/tos-useast2a-pve-0068/1c2df6365b1f408ba07999ecb0704306/?a=1988&br=3214&bt=1607&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1615921834&l=202103161310310101901891371E1C0557&lr=tiktok_m&mime_type=video_mp4&pl=0&policy=2&qs=0&rc=anc0Om50OTdnNDMzNDczM0ApOmU4NDg7Mzs6N2ZmOWc4NWc2Ni1kay9sZzRgLS1iMTZzczIyYzAtMjNeYC0vLl9eMjQ6Yw%3D%3D&signature=5fe2b4b9edff5a51f83c4ec2457510a0&tk=tt_webid_v2&vl=&vr="></video>
            {/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/vz9n-2W33WY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

            {/* VideoFooter */}
            {/* VideoSidebar */}
        </div>
    )
}

export default Video;

