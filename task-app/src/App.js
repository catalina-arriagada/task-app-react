import './App.css';
import Logo from './Components/logo';
import TaskList from './Components/TaskList';

function App() {
   return (
    <div className='task-app'>
      <Logo />
      <div className="task-main-list">
        <h1>My Tasks</h1>
        <TaskList />
      </div>
    </div>
   );
}

export default App;
