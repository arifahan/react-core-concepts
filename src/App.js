import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>I am a React Person</h1>
        <Person></Person>
        <Person></Person>
        </header>
    </div>
  );
}
function Person(){
  return (
  <div style={{color:'yellow', backgroundColor:'aqua', padding:'10px', margin:'10px'}}> 
    <h1>Name: Shahruk Khan</h1>
    <h2>Hero of The Year</h2>
  </div>
  )
}

export default App;
