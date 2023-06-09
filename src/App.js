import './App.css';
import MultiSelectComponent from './MultiSelectComponent';

function App() {

  return (
    <div className="App">
      <h1>Test</h1>

      <MultiSelectComponent value={[1, 2, 3]} readonly={true} />
    </div>
  );
}

export default App;
