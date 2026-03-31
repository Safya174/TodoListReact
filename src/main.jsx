import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import TaskProvider from './Context/TaskContext'


createRoot(document.getElementById('root')).render(
  <TaskProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </TaskProvider>
  ,
)
