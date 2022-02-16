import {Routes, Route} from 'react-router-dom';
import Baner from './Components/General/Home/Baner';
import Home from './Components/General/Screen/Home';
import About from './Components/General/About';


function App() {
  return (
    <div>
    
   
      <Routes>
        <Route path='/Home' exact element={<Home/>}/>
        <Route path='/About' element={<About/>} />
       
      </Routes>
    </div>
  );
}

export default App;
