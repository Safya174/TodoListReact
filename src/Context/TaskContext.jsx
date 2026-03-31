import { createContext, useState, useEffect } from "react";

export let TaskContext = createContext();

export default function TsaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const savedTask = localStorage.getItem("tasks");
    return savedTask ? JSON.parse(savedTask) : [
      { id: 1, title: "JS", details: "Before This Month", isCompleted: false },
    ];
  });

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }


  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

 
  function completeTask(id) {
    setTasks(tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
  }

 
  function Update(updatedTask) {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  }

 
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, completeTask, Update }}>
      {children}
    </TaskContext.Provider>
  );
}