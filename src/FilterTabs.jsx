import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
export default function ColorToggleButton({alignment,setAlignment}) {
  
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div style={{marginTop:"20px",textAlign:"center"}}>
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="Completed tasks" >Completed tasks</ToggleButton>
      <ToggleButton value="Unfinished">Unfinished</ToggleButton>
      <ToggleButton value="All">All</ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}
