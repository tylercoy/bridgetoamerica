
// componentss
import DisplayImageWithName from './Components/displayImageWithName';

// assets
import image from './assets/bridge.jpg'

// css
import './App.css';

function App() {
  return (
    <div className="App">
      <DisplayImageWithName 
        title={ "Tyler" }
        image={image}
      />    
      </div>
  );
}

export default App;
