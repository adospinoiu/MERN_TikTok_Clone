import './App.css';
import Video from './Video.js';
import axios from "./axios.js";
import React, { useEffect, useState } from "react";

function App() {
  const [ videos, setVideos ] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data)

      return response;
    }

    fetchPosts();
  }, [])

  return (
    <div className="app">
      <h1>Full-Stack MERN Tik-Tok App</h1>
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}

        {/* <Video 
          url="https://v21-us.tiktokcdn.com/video/tos/useast2a/tos-useast2a-pve-0068/2b219dd107dc4e92b8340a21ab901d20/?VExpiration=1616178484&VSignature=98fa22f30309297fd5327e09855ad7be&a=1233&br=3818&bt=1909&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20210319122732010189073132561048BE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M207bGk5bGtzNDMzaDczM0ApOWlkMzQ1aWVlNzU3NzlkOWdhX29yYTRmMTFgLS0wMTZzcy8uYC5hXmNhLl5iMTJfYDA6Yw%3D%3D&vl=&vr="
          channel="adospinoiu"
          description="MERN Stack Clone"
          song="Awesome song"
          likes={111}
          messages={222}
          shares={333}
        />
        <Video 
          url="https://v21-us.tiktokcdn.com/video/tos/alisg/tos-alisg-pve-0037c001/2deb7d5b5b974b4faa9dc241f51bb72e/?VExpiration=1617128186&VSignature=fde639e0da6040542dd7d9a7d26c4d1e&a=1233&br=4202&bt=2101&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103301216060101890740925B2B6094&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3hnZ3Bpd3czNDMzOjczM0ApNmhpNTRkNDs0NzhoNmg2PGdwZmMzMDY0Y2NgLS0yMTRzc2BjMWAwMi0uXjAuLjFgLi46Yw%3D%3D&vl=&vr="
          channel="adospinoiu"
          description="MERN Stack Clone"
          song="Awesome song"
          likes={555}
          messages={666}
          shares={777}
        /> */}
      </div>
    </div>
  );
}

export default App;
