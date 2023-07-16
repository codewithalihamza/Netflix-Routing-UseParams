// import logo from './logo.svg';
import './App.css';
import Cards from './component/Cards';

import Data from './Cardsdata/Data';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Detailproduct from './Pages/Detailproduct';
function App() {
  return (
    <div className="App">
      
<BrowserRouter>

 
      <Routes>
      
        <Route path='/' element={<Cards Carddata={Data}/>}/>
      <Route path='/detailproduct/:title' element={<Detailproduct/>} />
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
