import React, { useRef, useState } from 'react';
import "./Video.css";


function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        // if video is playing
        // stop it

        // otherwise if its not playing
        // play it
    }

    return (
        <div className="video">
            <video
            onClick={handleVideoPress}
            className="video__player"
            loop
            ref={videoRef}
            src="https://v25-us.tiktokcdn.com/d61f5a0e571b59fffb16db13bc904ec3/605107cd/video/tos/useast2a/tos-useast2a-pve-0068/aff95613715a4beb806b06dfeaa91040/?a=1233&br=3800&bt=1900&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210316133136010189049225531E1E0A&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=Mzl4OmVyPHA3MzMzOjczM0ApaWY3Mzo4OGQ7Nzc0OjtlN2dfamdlc2c0YnJgLS00MTZzcy40Ml9hXmBeL19iLzEwXmE6Yw%3D%3D&vl=&vr="></video>

            {/* VideoFooter */}
            {/* VideoSidebar */}
        </div>
    )
}

export default Video;

