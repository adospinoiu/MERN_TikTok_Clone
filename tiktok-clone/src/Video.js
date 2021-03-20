import React, { useRef, useState } from 'react';
import VideoFooter from './VideoFooter';
import "./Video.css";
import VideoSidebar from './VideoSidebar';



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
            src="https://v21-us.tiktokcdn.com/video/tos/useast2a/tos-useast2a-pve-0068/2b219dd107dc4e92b8340a21ab901d20/?VExpiration=1616178484&VSignature=98fa22f30309297fd5327e09855ad7be&a=1233&br=3818&bt=1909&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210319122732010189073132561048BE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M207bGk5bGtzNDMzaDczM0ApOWlkMzQ1aWVlNzU3NzlkOWdhX29yYTRmMTFgLS0wMTZzcy8uYC5hXmNhLl5iMTJfYDA6Yw%3D%3D&vl=&vr="></video>

            <VideoFooter />
            <VideoSidebar />
        </div>
    )
}

export default Video;

