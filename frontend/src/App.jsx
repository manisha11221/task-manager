import 'bootstrap/dist/css/bootstrap.min.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { useState } from 'react';
import './index.css';

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="min-vh-100 d-flex flex-column">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <div className="text-center mb-4">
              <h2 className="fw-bold text-primary">📝 Task Manager</h2>
            </div>
   
            <div className="glass-card p-4 mb-3">
              <AddTask onTaskAdded={() => setRefresh(!refresh)} />
            </div>

            <div className="glass-card p-4" >
              <TaskList key={refresh} />  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
