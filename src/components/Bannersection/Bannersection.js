import React from 'react';
import './Bannersection.css';
import Grid from '@mui/material/Grid';
import BannerIMg from "../../images/banner.png";
import Buttons from '../Buttons/Buttons.js'
import ClientsList from '../ClientsList/ClientsList.js'

function Bannersection() {
  return (
    <div className='banner_common'>
    <Grid container spacing={0}  justifyContent="center" alignItems="center">
    <Grid xs={6}>
      <div className='banner_left'>
        <h2>Integrate Your <br></br>
                    stack - automate <br></br>your work</h2>
        <p>Evolve at the speed and scale of your business<br></br>with the leader in low-code automation</p>
        <Buttons/>
        <ClientsList/>
      </div>
    </Grid>
    <Grid xs={6}>
    <img src={BannerIMg} alt="banner" />
    </Grid>
   
  </Grid>
  </div>
  );
}

export default Bannersection;
