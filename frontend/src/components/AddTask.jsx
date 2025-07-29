import { useState } from 'react';
import { createTask } from '../services/taskService';
import { toast } from 'react-toastify';

const AddTask = ({ onTaskAdded }) => {
  const [taskName, setTaskName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    if (!taskName.trim()) {
      toast.error("Please Enter Your Task")
      return;
    };
    setLoading(true);
    await createTask(taskName);
    setTaskName('');
    onTaskAdded();
    setLoading(false);
  };

  return (
    <div className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new task..."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <button
          className="btn btn-primary"
          onClick={handleAdd}
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Task'}
        </button>
      </div>
    </div>
  );
};

export default AddTask;
