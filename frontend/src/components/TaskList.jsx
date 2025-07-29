import { useEffect, useState } from "react";
import {
  getTasks,
  updateTaskStatus,
  deleteTask,
} from "../services/taskService";
import { FaTrash, FaCheckCircle, FaRegCircle } from "react-icons/fa";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
 
  const [filter, setFilter] = useState("All");

  const fetchTasks = async () => {
   
    const data = await getTasks();
    setTasks(data);
  
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleToggleStatus = async (taskId, currentStatus) => {
    await updateTaskStatus(taskId, currentStatus);
    fetchTasks();
  };

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    fetchTasks();
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Completed") return task.status;
    if (filter === "Pending") return !task.status;
  });


  return (
    <>
      <div className="d-flex justify-content-center gap-2 mb-4">
        {["All", "Completed", "Pending"].map((btn) => (
          <button
            key={btn}
            className={`btn filter-btn ${
              filter === btn ? "active" : "btn-light border"
            }`}
            onClick={() => setFilter(btn)}
          >
            {btn}
          </button>
        ))}
      </div>

      <div className="row g-3">
        {filteredTasks.length === 0 ? (
          <div className="col-12 text-center text-muted">
            No tasks available.
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div className="col-12" key={task._id}>
              <div
                className={`card shadow-sm border-0 ${
                  task.status ? "bg-light" : "bg-white"
                }`}
              >
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h6
                      className={`mb-1 ${
                        task.status
                          ? "text-decoration-line-through text-muted"
                          : ""
                      }`}
                      style={{
                        maxHeight: "3rem", 
                        overflowY: "auto",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        lineHeight: "1.4",
                        paddingRight: "4px",
                      }}
                    >
                      {task.taskName}
                    </h6>
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      className={`btn btn-sm ${
                        task.status ? "btn-success" : "btn-outline-secondary"
                      }`}
                      title={
                        task.status ? "Mark as Incomplete" : "Mark as Complete"
                      }
                      onClick={() => handleToggleStatus(task._id, task.status)}
                    >
                      {task.status ? <FaCheckCircle /> : <FaRegCircle />}
                    </button>

                    <button
                      className="btn btn-sm btn-danger"
                      title="Delete Task"
                      onClick={() => handleDelete(task._id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default TaskList;
