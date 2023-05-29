
// do like this url
// https://storage.googleapis.com/accio-digital-ocean-data/media/frontend_placement_mock/frontend_placement_mock_texteditor.gif
import './App.css';
import {useState} from "react"

function App() {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);

  function handleChange(e){
    setText(e.target.value);
  }

  function handleButton(){
    setHistory([...history, text]);
    setText("");
  }

  function handleUndo(){
    if(history.length > 0){
      const prevText=history[history.length-1];
      setHistory(history.slice(0,history.length-1));
      setText(prevText);
    }
  }

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleButton}>Append</button>
      <button onClick={handleUndo}>undo</button>
         
         <div>
          {
            history.map((text,index)=>(
              <p key={index}>{text}</p>
            ))
          }
         </div>

    </div>
  );
}

export default App;
