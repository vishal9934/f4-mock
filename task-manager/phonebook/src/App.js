import './App.css';
import {useState} from "react"

function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [data,setData]=useState([]);

  function handleClick(){
    setData([...data,{name,number}]);
  }

  return (
    <div className="App">
      <h1>phone book</h1>
      <label htmlFor="username">Name</label> <br />
      <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}/> <br />
      <label htmlFor="number">number</label> <br />
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/> <br /> <br />
      <button onClick={handleClick}>add contact</button>

      <h1>contact:-</h1> <br /> <br />
        
        {
          data.map((item,index)=>(
            <li key={index}>{item.name} &nbsp;{item.number}</li>
          ))
        }
    </div>
  );
}

export default App;
