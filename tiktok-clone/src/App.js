import './App.css';
import Video from './Video.js';

function App() {
  return (
    <div className="app">
      <h1>Full-Stack MERN Tik-Tok App</h1>
      <div className="app__videos">
        <Video />
        <Video />
      </div>
      
      {/* app container
        videos
        <Video />
        <Video />
        <Video />
        <Video /> */}

    </div>
  );
}

export default App;
