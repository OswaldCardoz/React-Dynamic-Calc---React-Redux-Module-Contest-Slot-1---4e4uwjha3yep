import React,{useState,useEffect} from 'react'
import '../styles/App.css';
const App = () => {
 const[input1,setInput1]=useState('');
 const[input2,setInput2]=useState('');
 const[result,setResult]=useState(0);

 useEffect(()=>{
  const num1=parseFloat(input1);
  const num2=parseFloat(input2);
  // if(!NaN(num1)&&!NaN(num2)){
  //   setResult(num1+num2);
  // }else{
  //   setResult(0);
  // }
  setResult(num1+num2);
 },[input1,input2]);
 
 const handleInput1=(e)=>{
  setInput1(e.target.value);
 }
 const handleInput2=(e)=>{
  setInput2(e.target.value);
 }
  return (
    <div id="main">
      <input id='input1' onChange={handleInput1} value={input1}/>
       +
      <input id='input2' onChange={handleInput2} value={input2}/> 
      
      <p id='result'>{result}</p>
    </div>
  )
}


export default App;
