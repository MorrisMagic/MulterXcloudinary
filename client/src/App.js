import './App.css';
import { useState } from 'react';
import axios from "axios"
function App() {
  const [file, setfile] = useState("")
  const send=async()=>{
    try {
      const formData =new FormData()
      formData.append("logo",file)
      await axios.post("http://localhost:5000/upload",formData)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="App">
<input type="file" name="" id="" onChange={(e)=>setfile(e.target.files[0])}/>
<button onClick={send}>Send</button>
    </div>
  );
}

export default App;
