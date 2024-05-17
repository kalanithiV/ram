import React from 'react';
import '../ClientsList/ClientsList.css'
import Clientlogo1 from "../../images/vodafone.png";
import Clientlogo2 from "../../images/walmart.png";
import Clientlogo3 from "../../images/spotify.png";
import Clientlogo4 from "../../images/canon.png";

function ClientsList() {
  return (
    <div className='client_listouter'>
      <p>Working with the best</p>
      <ul>
        <li><img src={Clientlogo3} alt="Spotify" /></li>
        <li><img src={Clientlogo1} alt="vodafone" /></li>
        <li><img src={Clientlogo2} alt="walmart" /></li>
        <li><img src={Clientlogo4} alt="Canon" /></li>
      </ul>
  </div>
  );
}

export default ClientsList;
