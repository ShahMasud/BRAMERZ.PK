import {Routes, Route} from 'react-router-dom';
// import Baner from './Components/General/Home/Baner';
import Home from './Components/General/Screen/Home';
import About from './Components/General/About';
// import Footer from './Components/General/Footer';
import Team from './Components/General/Team';
import Work from './Components/General/Work';
import Products from './Components/General/Products';
import Client from './Components/General/Client';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>} />
        <Route path='/Team' element={<Team/>} />
        <Route path='/Work' element={<Work/>} />
        <Route path='/Products' element={<Products/>} />
        <Route path='/Client' element={<Client/>}/>
       
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
