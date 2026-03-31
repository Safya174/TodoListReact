import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import React, { useState, useContext } from "react";
import { TaskContext } from './Context/TaskContext'
import FormDialog from './prop'
import EditDialog from './EditDialog';
import 'App.css'
export default function TodoItem({ Task }) {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  let { deleteTask, completeTask, Update } = useContext(TaskContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handlecolseEdit = () => setOpenEdit(false);

  return (
    <div
      className="task-card" 
      style={{
        backgroundColor: "#E6D5B8", 
        padding: "20px", 
        color: "black",
        marginTop: "15px",
        display: "flex",
        flexWrap: "wrap", 
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "12px",
        gap: "15px" 
      }}
    >
  
      <div style={{ flex: "1 1 200px", textAlign: "left" }}>
        <h2 style={{ 
            marginBottom: "5px", 
            fontWeight: "bold", 
            fontSize: "1.2rem",
            textDecoration: Task.isCompleted ? "line-through" : "none",
            opacity: Task.isCompleted ? 0.5 : 1
          }}>
          {Task.title}
        </h2>
        <p style={{ margin: 0, fontSize: "0.9rem", opacity: 0.8 }}>{Task.details}</p>
      </div>

    
      <div style={{ 
          display: "flex", 
          gap: "8px", 
          justifyContent: "flex-end",
          flexShrink: 0 
        }}>
        
      
        <IconButton onClick={handleOpen}
          style={{
            backgroundColor: "white",
            color: "#B91C1C",
            border: "solid #B91C1C 1px", 
            padding: "8px" 
          }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>

     
        <IconButton onClick={handleOpenEdit}
          style={{
            backgroundColor: "white",
            color: "#927A5D",
            border: "solid #927A5D 1px",
            padding: "8px"
          }}
        >
          <EditIcon fontSize="small" />
        </IconButton>

   
        <IconButton onClick={() => completeTask(Task.id)}
          style={{
            backgroundColor: Task.isCompleted ? "#4D7C0F" : "white",
            color: Task.isCompleted ? "white" : "#4D7C0F",
            border: "solid #4D7C0F 1px",
            padding: "8px"
          }}
        >
          <CheckIcon fontSize="small" />
        </IconButton>
      </div>

      <FormDialog
        open={open}
        handleClose={handleClose}
        handleDelete={() => { deleteTask(Task.id) }}
      />
      <EditDialog open={openEdit} handleClose={handlecolseEdit} handleEdit={Update} Task={Task} />
    </div>
  );
}