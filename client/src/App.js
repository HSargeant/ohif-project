import './App.css';
import './components/Search.css'
import './components/Search.js'
import { useApi } from './hooks/use-api';
import Search from './components/Search';

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <Search/>
        <p>
          {response}
        </p>
      </header>
    </div>
  );
}
export default App;
