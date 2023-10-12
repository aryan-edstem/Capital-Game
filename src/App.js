import './App.css';
import CountryCapital from './countrycapital';

function App() {
  const data = {
    India: "New Delhi",
    Australia:"Canberrra",
    Angola:"Luanda",
    Bahrain:"Manama",
    China:"Beijing"
  }
  
  return (
    <div className="App">
      <CountryCapital data={data} />
    </div>
  );
}

export default App;
