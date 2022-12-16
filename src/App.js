import { useEffect } from 'react';
import './App.css';
import Useeffecthook from './Components/Useeffecthook';
import Usememohook from './Components/Usememohook';
import Usestatehook from './Components/Usestatehook';


function App() {
  useEffect(()=>{
  alert("useeffect");
  })
  return (
    <div className="App">
{/*            
       <Usestatehook/>
       <Useeffecthook/> */}
       <Usememohook/>
    </div>
  );
}

export default App;
