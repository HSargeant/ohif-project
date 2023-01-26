import './App.css';

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          sadfsfg
          {response}
        </p>
      </header>
    </div>
  );
}

export default App;
