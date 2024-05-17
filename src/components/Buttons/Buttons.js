import React from 'react';
import Button from '@mui/material/Button';
import '../Buttons/Buttons.css'

function Buttons() {
  return (
    <div className='Buttonouter'>
   <Button variant="contained" className='blackbtn'>start free trial</Button>
      <Button variant="outlined" className='outlined_btn'>Get a demo</Button>
  </div>
  );
}

export default Buttons;
