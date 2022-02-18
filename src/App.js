import {Routes, Route} from 'react-router-dom';
import Baner from './Components/General/Home/Baner';
import Home from './Components/General/Screen/Home';
import About from './Components/General/About';
import Footer from './Components/General/Footer';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>} />
       
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
