import React from 'react';
import './input.css';

const BestandInput = React.memo((props) =>{

  const getData = (bestand) =>{
    let filereader = new FileReader();
    filereader.readAsText(bestand)
    props.laden(true)
    filereader.onload = uitgelezenData;
    filereader.onerror = new Error("Er is iets mis gegaan");
  }

  const uitgelezenData = (event) =>{
    let csv = event.target.result.split(/\r\n|\n/);
    let regels = csv.map(data => data.split(';'))
    props.laadBestand(regels)
    
  }

  return (
  	<div id="uploader" >
  		<input type="file" accept=".csv" onChange={e => getData(e.target.files[0])}></input>
  		<p>Sleep hier je bestand naartoe of klik hier!</p>	
  	</div>
  	)
})

export default BestandInput;