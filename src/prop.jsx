import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

export default function FormDialog({ open, handleClose, handleDelete }) {
  return (
    <Dialog open={open} onClose={handleClose} >
      <div style={{backgroundColor:"#FDFBF0",borderRadius:"15px"}}>
         <DialogTitle style={{color:"#2D3436",fontWeight:'bold'}}>Confirm Delete</DialogTitle>

      <DialogContent style={{color:"#57606f"}}>
        Are you sure you want to delete the task? 
      </DialogContent>

      <DialogActions >
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleDelete} style={{color:"#B91C1C"}}>
          Delete
        </Button>
      </DialogActions>
      </div>
      
    </Dialog>
  );
}