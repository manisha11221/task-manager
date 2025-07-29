import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  status: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Task', taskSchema)
