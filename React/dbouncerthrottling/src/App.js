

import { useState } from 'react';
import './App.css';
import Counter from './Components/Counter';
import Show from './Components/Show';
import Slider from './Components/Slider';
import {db} from "./Components/db.js"

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <Show />
      <div onClick={() => setShow(!show) }><button>{show ? "Don'tshow" :"show"}</button></div>
      {show && <Slider db ={db} /> }
      <Slider db ={db} />
    </div>
  );
}

export default App;
