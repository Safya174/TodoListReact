import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { useState,useEffect } from 'react';
import { Details } from '@mui/icons-material';
export default function EditDialog({ open, handleClose, handleEdit,Task }) {
    let [valueEdit,setValueEdit] = useState({title:"",details:""})
    useEffect(() => {
       setValueEdit({
         title:Task.title,
         details:Task.details
       }) 
    },[Task])

    
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle style={{color:"#927A5D",fontWeight:"bold"}}>Edit Task</DialogTitle>

      <DialogContent>
        <div >
        <label>Task title</label>
         <input type="text" style={{marginBottom:"10px",width:"100%",borderRadius: "8px",border:"solid 1px #E6D5B8",padding:"5px"}} value={valueEdit.title} 
             onChange={(e)=>{
                setValueEdit({...valueEdit,title: e.target.value})
             }}
         
         />
        </div>
       <div>
         <label>Task Detals</label>
         <input type="text" style={{marginBottom:"10px",width:"100%",borderRadius: "8px",border:"solid 1px #E6D5B8",padding:"5px"}} value={valueEdit.details}
             onChange={(e)=>{
                setValueEdit({...valueEdit,details:e.target.value})
             }}
         />
       </div>
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} style={{color:"#927A5D"}}>Cancel</Button>
        <Button onClick={()=>{
            handleEdit({
                 ...Task,
                 title: valueEdit.title,
                details: valueEdit.details
            });
          handleClose();
        }} style={{color:"#8FB3D0"}}>
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
}