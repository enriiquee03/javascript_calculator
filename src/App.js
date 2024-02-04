import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div className="App h-screen mt-auto">
      <div className='CalculatorContainer '>
        <Calculator></Calculator>
      </div>
    </div>
  );
}

export default App;
