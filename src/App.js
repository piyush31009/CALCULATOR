import React, { useState } from 'react';
import './App.css';
const App = () => {

  const [result,setResult]=useState("");

  const clickHandler=(event)=>{
    setResult(result.concat(event.target.value));
  }
  
  const clearDisplay=()=>{
     setResult("");
  }

  const equal=(event)=>{
    setResult(eval(result).toString());
  }

  const dele=()=>
  {
    setResult(result.slice(0,-1));
  }
  return (
    
      < div className="calc">
      <input type="text" placeholder="0" id="answer" value={result}/>
      <input type="button" value="%" className="button button1" onClick={clickHandler}/>
      <input type="button" value="/" className="button button1" onClick={clickHandler}/>
      <input type="button" value="AC" className="button button1" onClick={clearDisplay}/>
      <input type="button" value="DEL" className="button button1" onClick={dele}/>
      <input type="button" value="9" className="button" onClick={clickHandler}/>
      <input type="button" value="8" className="button" onClick={clickHandler}/>
      <input type="button" value="7" className="button" onClick={clickHandler}/>
      <input type="button" value="*" className="button button1" onClick={clickHandler}/>
      <input type="button" value="6" className="button" onClick={clickHandler}/>
      <input type="button" value="5" className="button" onClick={clickHandler}/>
      <input type="button" value="4" className="button" onClick={clickHandler}/>
      <input type="button" value="-" className="button button1" onClick={clickHandler}/>
      <input type="button" value="3" className="button" onClick={clickHandler}/>
      <input type="button" value="2" className="button" onClick={clickHandler}/>
      <input type="button" value="1" className="button" onClick={clickHandler}/>
      <input type="button" value="+" className="button button1" onClick={clickHandler}/>
      <input type="button" value="0" className="button " onClick={clickHandler}/>
      <input type="button" value="00" className="button " onClick={clickHandler}/>
      <input type="button" value="." className="button" onClick={clickHandler}/>
      <input type="button" value="=" className="button button1" onClick={equal}/>
    </div>
  )
}
export default App;