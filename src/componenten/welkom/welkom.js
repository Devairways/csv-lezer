import React from 'react';
import './welkom.css';

const Welkomst = (props) =>{

  return (
  	<div id="uploader" >
      <div>
          <img src={require('./upload.png')} />
      </div>
  		<div>
          <h2>Welkom op CSV-Lezer!</h2>
          <p>Deze tool leest je CSV-data uit en geeft deze weer in een overzichtelijk tabel,
           makkelijk te bedienen door het bovenaan staande inputveld!
           waar wacht je nog op?</p>
      </div>	
  	</div>
  	)
}

export default Welkomst;