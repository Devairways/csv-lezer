import React from 'react';
import "./tabel.css";


const Tabel = React.memo(({ header, body, sorteer }) => {

const dataUpdate = (index) =>{
    sorteer(index,body)
}

  if(header[0] && body){
    return(
        <div>
          <table >
              <tr id="header">
              {
                header[0].map((head,i)=>{
                    return <th onClick={e => dataUpdate(i)} key={i}>{head}</th>
                })
              }
              </tr>
              <tbody>
              {
                body.map((gebruiker,i) => {
                  return (
                    <tr key={i}>
                     {
                        gebruiker.map((detail)=>{
                         return(<td>{detail}</td>)   
                        })
                     }
                    </tr>
                    );
                 })
              }
              </tbody>
            </table>
        </div>
        )
  }
  else{
    return (
      <div id="intro">
        <div>
            <img alt="logo" src={require('./upload.png')} />
        </div>
        <div>
            <h2>Welkom op CSV-Lezer!</h2>
            <p>Deze tool leest je CSV-data uit en geeft deze weer in een overzichtelijk tabel,
             makkelijk te bedienen door het bovenaan staande inputveld!
             waar wacht je nog op?</p>
        </div>  
      </div>
    );

  }
  
})

export default Tabel;