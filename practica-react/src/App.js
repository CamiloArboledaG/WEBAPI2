import './App.css';
import Weather from './components/Weather';
import News from './components/News';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
        
        <Header/>
        <Weather/>
        <News/>
    </div>
  );
}

export default App;
