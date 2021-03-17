import React, { useRef, useState } from 'react';
import "./Video.css";


function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video
            onClick={handleVideoPress}
            className="video__player"
            loop
            ref={videoRef}
            src="https://v39-us.tiktokcdn.com/febb17ecb4bdc3dad90991734636f1af/60524188/video/tos/alisg/tos-alisg-pve-0037c001/e3fc3a4a6c1c4d1da3c081928946e3d7/?a=1233&br=1680&bt=840&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210317115048010189074148100ED5E4&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=M213cTZ4cWs3NDMzZTczM0ApZDw0ZWY4OGQ5N2g8OzxkOmcuc2A1amxhNjRgLS1eMTRzc2AyYV4tMTVgXmNeLS81NWM6Yw%3D%3D&vl=&vr="></video>

            {/* VideoFooter */}
            {/* VideoSidebar */}
        </div>
    )
}

export default Video;

