import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import React, { useState, useContext } from "react";
import { TaskContext } from './Context/TaskContext'
import FormDialog from './prop'
import EditDialog from './EditDialog';
import './App.css'
export default function TodoItem({Task}) {
 const [open, setOpen] = useState(false);
 const [openEdit, setOpenEdit] = useState(false);
 let {tasks,addTask,deleteTask,completeTask,Update} = useContext(TaskContext);
 const handleOpen = () => setOpen(true);
 const handleClose = () => setOpen(false);
 const handleOpenEdit = () => setOpenEdit(true);
 const handlecolseEdit = () => setOpenEdit(false);

  return (
    <div
      style={{
        backgroundColor: "#E8DBB3",
        padding: "40px",
        color: "black",
        marginTop: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "10px"
      }} className="task-card"
    >
      <div className="task-actions" > 
        <h2 style={{ marginBottom:"10px", fontWeight: "bold" }}>{Task.title}</h2>
        <p style={{ margin: 0 }}>{Task.details}</p>
      </div>

      <div className="task-action" > 
        <IconButton onClick={()=>{
          handleOpen()
        }}
          style={{
            backgroundColor: "white",
            color: "#B91C1C",
            border: "solid #B91C1C 2px",
            marginRight: "10px"
          }}
        >
          <DeleteIcon />
        </IconButton>

        <IconButton onClick={()=>{
          handleOpenEdit()
        }}
          style={{
            backgroundColor: "white",
            color: "#927A5D",
            border: "solid #927A5D 2px",
            marginRight: "10px"
          }}
        >
          <EditIcon />
        </IconButton>

        <IconButton onClick={()=>{completeTask(Task.id)
          
        }}
          style={{
            backgroundColor: Task.isCompleted == true ? "#6B8E23":"white" ,
            color: Task.isCompleted == true ? "white":"#6B8E23" ,
            border: "solid #6B8E23 2px"
          }}
        >
          <CheckIcon />
        </IconButton>
      </div>
       <FormDialog
        open={open}
        handleClose={handleClose}
        handleDelete={()=>{deleteTask(Task.id)}}
      />
      <EditDialog open={openEdit} handleClose={handlecolseEdit} handleEdit={Update} Task={Task}/>
    </div>
  );
}