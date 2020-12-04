import './style.css';
import imageInSrc from './imageInSrc.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Your name here</h1>
          <br />
          <img src={imageInSrc} alt='imageInSrc'/>
          <br />
          <img src="/imageInPublic.jpg" alt='imageInPublic' />
        </div>
        <video width={640} height={360} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>        
      </header>
    </div>
  );
}

export default App;
