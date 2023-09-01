import './App.css';
import Navbar from './Navbar';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home';
import Placetovisit from './Placetovisit';
import BestTimeToVisit from './BestTimeToVisit';
import Food from './Food';
import packege from './Packege';
import Packege from './Packege';



function App() {
  return (
    <div>
      
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/place' element={<Placetovisit/>}/>
        <Route path='/time' element={<BestTimeToVisit/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/packege' element={<Packege/>}/>
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
