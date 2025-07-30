
# 📝 Task Management App

A simple full-stack Task Management App built with **React**, **Node.js (Express)**, and **MongoDB** to demonstrate CRUD functionality, API interaction, and user-friendly task handling.

---

## 🚀 Features

- Add new tasks  
- View all tasks  
- Mark tasks as complete/incomplete  
- Delete tasks  
- Input validation  
- API error/success notifications with toast  
- Clean, responsive UI (Bootstrap)  
- Created using React Hooks & Axios

---

## 🧠 Tech Stack

- **Frontend**: React, Axios, React Toastify, Bootstrap
- **Backend**: Node.js, Express.js, MongoDB (with Mongoose)
- **Database**: MongoDB Atlas
- **Deployment**: Render (backend), Vercel (frontend) 

---
**Local Setup Instructions**

-Backend Setup (Node.js + Express + MongoDB)
1. Navigate to the backend directory:
   cd backend
2.Install dependencies:
  npm install
3.Create a .env file with the following:
  MONGO_URI=<your-mongodb-connection-string>
  PORT=8000
  CORS_ORIGIN=*
4.Start the backend server:
  npm run dev


Frontend Setup (React + vite)
1.Navigate to the frontend directory:
 cd frontend
2.Install dependencies:
  npm install
3.Create a .env file:
  VITE_API_BASE_URL=http://localhost:8000
4.Start the React app:
  npm run dev
  






