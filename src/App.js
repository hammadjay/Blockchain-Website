import './App.css';

function App() {
  
  const wave =()=>{
    alert('Hello jee')
  }

  return (
    <div className="App">
      <h1>HELLO 👋 ! Hammad Here 😁</h1>
      <h4>I am a Software engineer. I love Video Games, Learning new technology and music.</h4>
      <code>Currently I am Working on a <strong> BlockChain Web3 App</strong>.I'd like to see what is your favourite music</code>
      <p><code>Please share <strong>spotify link</strong> of the song you love</code></p>
      <button className="waveButton" onClick={wave}>
          Wave at Me
        </button>
    </div>
  );
}

export default App;
