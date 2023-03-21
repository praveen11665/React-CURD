import './App.css';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="col-12">
            <h1 className="text-white">React CURD Operations</h1>
          </div>
          <List></List>
        </div>
      </header>
    </div>
  );
}

export default App;
