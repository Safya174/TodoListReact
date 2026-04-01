import Container from '@mui/material/Container';
import Header from './Header';
import ColorToggleButton from './FilterTabs'
import TodoItem from './TodoItem'
import { useContext , useState } from 'react';
import {TaskContext} from './Context/TaskContext'

export default function SimpleContainer() {
 let {tasks,addTask} = useContext(TaskContext);
 let [inputValue , setInputValue] = useState("");
 const [alignment, setAlignment] = useState('All');
 let filterTasks = tasks;
 if(alignment == "Completed tasks"){
   filterTasks = tasks.filter(task => task.isCompleted === true)
 }
 if(alignment == "Unfinished"){
   filterTasks = tasks.filter(task => task.isCompleted === false)
 }
let Taskt = filterTasks.map((Task) => (
    <TodoItem key={Task.id} Task={Task} />
));
    return(
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
      }}>
         
        <Container maxWidth="sm" style={{backgroundColor:"#FFFDEB",padding:"15px"}}>
         <Header/>
        <ColorToggleButton alignment={alignment} setAlignment={setAlignment} />
        
            {Taskt}
            <div style={{marginTop:"20px"}}> 
                   <button
           onClick={() => addTask({
             id: Date.now(),
             title: inputValue,
             details: "Added from button",
             isCompleted: false
  })}
  style={{color:"white",padding:"15px",backgroundColor:"#C92C20",border:"none",borderRadius:"10px"}}
  className='widthButton'
>
  Add Task
</button>
    <input type="text"  value={inputValue}   placeholder='Task Title' style={{padding:"15px",width:"75%",marginLeft:"20px",border:"#D1D5DB solid 1px"}} className='widthInput' onChange={(e)=>{
      setInputValue(e.target.value)
    }} />

            </div>
            
     
      </Container>
      </div>
      
    )
      
}