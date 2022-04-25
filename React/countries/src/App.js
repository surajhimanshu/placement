import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cities from './features/cities/Cities';
import AddCountry from './features/countries/AddCountry';
import AddCity from './features/cities/AddCity';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Cities />}/>
        <Route path='/add-country' element={<AddCountry/>}/>
        <Route path='/add-city' element={<AddCity/>}/>
      </Routes>
    </div>
  );
}

export default App;
