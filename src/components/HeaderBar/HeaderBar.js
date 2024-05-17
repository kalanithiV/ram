import React from 'react';
import './HeaderBar.css';
import Link from '@mui/material/Link';
import Logoimg from "../../images/applogo.png";

function HeaderBar() {
  return (
    <div className="nav">
      <div className='nav_leftfull'>
      <div className='nav_left'>
        <img src={Logoimg} alt="Logo" />
      </div>
      <div className='nav_menu'>
        <Link href="#">Platform</Link>
        <Link href="#">Solutions</Link>
        <Link href="#">Resources</Link>
        <Link href="#">Pricing</Link>
      </div>
      </div>
      <div className='nav_menu nav_menuright'>
        <Link href="#">Login</Link>
        <Link href="#" className='get_staredbtn'>Get started</Link>
       
      </div>
    </div>
  );
}

export default HeaderBar;
