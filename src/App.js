import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="row">
          <div class="col-12">
            <h1 class="text-white">React CURD Operations</h1>
          </div>
          <List></List>
        </div>
      </header>
    </div>
  );
}

export default App;
