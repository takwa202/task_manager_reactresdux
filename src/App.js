import './style.css'
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import Filter from './components/Filter';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <Filter/>
       <AddTask/>
      <ListTask/>
      </div>

    </div>
  );
}

export default App;
