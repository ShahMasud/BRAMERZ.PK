import {Routes, Route} from 'react-router-dom';
import Home from './Components/General/Home';
import Services from './Components/General/Services';
import DigitalStratigy from './Components/General/DigitalStratigy';
import Design from './Components/General/Design';
import Web from './Components/General/Web';
import Mobile from './Components/General/Mobile';
import SocialMedia from './Components/General/SocialMedia';
import OnlineMediaBuying from './Components/General/OnlineMediaBuying';
import SEO from './Components/General/SEO';


function App() {
  return (
    <div>
    <Home/>
    <Services/>
    {/* <DigitalStratigy/> */}
      <Routes>
        <Route exact path='/DigitalStratigy' element={<DigitalStratigy/>} />
        <Route path='/Design' element={<Design/>} />
        <Route path='/Web' element={<Web/>}/>
        <Route path='/Mobile' element={<Mobile/>}/>
        <Route path='/SocialMedia' element={<SocialMedia/>} />
        <Route path='/OnlineMediaBuying' element={<OnlineMediaBuying/>} />
        <Route path='/SEO' element={<SEO/>}/>
      </Routes>
    </div>
  );
}

export default App;
