import './App.css';

import image from './assets/bridge.jpg'

function App() {
  return (
    <div className="App">
      <img style={{
        maxWidth: '400px',
        width: '100%'
      }} src={image} />
    </div>
  );
}

export default App;
