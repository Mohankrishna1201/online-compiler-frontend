
import './App.css';
import  { useState} from 'react';
import axios from 'axios';


function App() {
  const[code, setCode] =useState('');
  const[output,setOutput] =useState('');
  console.log(code);
  const handleSubmit =async() => {


    const payload = {
     language :'cpp',
     code
    }
    try{
      const {data} = await axios.post('http://localhost:5000/run', payload);
    console.log(data);
    setOutput(data.output);
    
    } catch(error) {
      console.log(error.message);
    }
  
 
 }

  
  
  return (
    <>
     <div className ="container">
<select className='select-box btn'> 
<option value='cpp'> C++</option>
<option value='c'> C</option>
<option value='java'> Java</option>
<option value='js'> Javascript</option>

</select>
<h1 className="head"> Mohan online Code Compiler</h1>

<textarea rows='20' cols='75' className ='textArea' value ={code}
onChange = { (e) => {setCode(e.target.value); }}
></textarea>

<br/>
<button   onClick ={handleSubmit} className='btn1'> Submit</button>
{output && 
<div className='outputbox'>
<textarea cols={50}  className="head1" >{output}</textarea>
</div>
}


     </div>

    </>

);
}

export default App;
