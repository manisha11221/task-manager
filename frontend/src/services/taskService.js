import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/tasks`;


export const getTasks = async () => {
  try {
    const res = await axios.get(BASE_URL);
    return res.data;
  } catch (err) {
    toast.error('Failed to load tasks.');
    throw err;
  }
};

export const createTask = async (taskName) => {
  try {
    const res = await axios.post(BASE_URL, { taskName });
    toast.success('Task added successfully!');
    return res.data;
  } catch (err) {
    toast.error('Failed to add task.');
    throw err;
  }
};

export const updateTaskStatus = async (taskId, currentStatus) => {
  try {
    const res = await axios.put(`${BASE_URL}/${taskId}`, {
      status: !currentStatus,
    });
    toast.info('Task status updated!');
    return res.data;
  } catch (err) {
    toast.error('Failed to update task.');
    throw err;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const res = await axios.delete(`${BASE_URL}/${taskId}`);
    toast.error('Task deleted.');
    return res.data;
  } catch (err) {
    toast.error('Failed to delete task.');
    throw err;
  }
};
