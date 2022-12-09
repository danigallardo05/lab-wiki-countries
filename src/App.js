import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';
import CountryData from './countries.json'
import { useState } from 'react';



function App() {

  const [countries, setCountries] = useState(CountryData)



  return (
    <div className="App">

      <NavBar />


      <div className='container'>
        <div className='row'>
          <CountryList countries={countries}/>
          
          <Routes>
            <Route path='/:id' element={<CountryDetails countries={countries}/>}
            />
          </Routes>
          
        </div>
      </div>


    </div>
  );
}

export default App;
