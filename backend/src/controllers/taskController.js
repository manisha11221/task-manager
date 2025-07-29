import Task from '../models/Task.js'

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 })
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

export const createTask = async (req, res) => {
  const { taskName } = req.body
  if (!taskName) return res.status(400).json({ error: 'Task name is required' })

  try {
    const newTask = new Task({ taskName })
    await newTask.save()
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({ error: 'Server error' })
  }
}

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, { $set: { status: req.body.status } }, { new: true })
    res.json(task)
  } catch {
    res.status(400).json({ error: 'Invalid Task ID' })
  }
}

export const deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id)
    res.json({ message: 'Task deleted' })
  } catch {
    res.status(400).json({ error: 'Invalid Task ID' })
  }
}
