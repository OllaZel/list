import './App.css';
import { ToDo } from './ToDo';


function App() {
  return (
    <div className="App">
      <div className='container'>
      <h1>Список дел и задачи</h1>
      </div>
      <div>
        <ToDo/>
      </div>
      
    </div>
  );
}

export default App;
