// import logo from '../public/3BrothersLogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>3 Brothers Ottawa Landscaping</h1>
      <header className="App-header">
        <img src={`${process.env.PUBLIC_URL}/3BrothersLogo.png`} alt="logo" />
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
