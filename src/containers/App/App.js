import React, {useState} from 'react';
import Tabel from '../../componenten/tabel/Tabel';
import BestandInput from '../../componenten/bestandinput/bestandinput';
import './App.css';

function App() {
  const [header, setHeader] = useState([])
  const [body, setBody] = useState([])
  const [tableHead, setTableHead] = useState(0)
  const [isLoading, setIsloading] = useState(false)

  const splitCsv = (data) =>{
    const top = data.filter((arr,i) => { return i < 1  });
    let info = data.filter((arr,i) => { return i > 0  });
    sorteer(1,info)
    setHeader(top)
    setIsloading(false) 
  }
  const sorteer = (index=0,lijst) =>{
    const sortering = lijst.map((arr)=>arr)
    if (index === tableHead){
      setBody(sortering.reverse());
    }
    else{
      sortering.sort((a, b) => {
      if (a[index] < b[index]) {
        return -1;
      }
      else if (a[index] > b[index]) {
        return 1;
      }
    return 0;
    });
    setBody(sortering)
    setTableHead(index)
    }
  }

  let content
  const laadData =() =>{
    if(!isLoading){
    content = <Tabel header={header} body={body} sorteer={sorteer}/>
  } else if (isLoading){
    content = <p>data aan het laden...</p>
  }
  }
  
 laadData()
  return (
    <div className="container">
    <BestandInput laadBestand={splitCsv} laden={setIsloading}/>
    {content}
    <p id="dev">ROY HEEFFER <span>&#x24B8; 2019</span></p>
    </div>
  );
}

export default App;
