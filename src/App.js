import React from 'react';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Coin from './pages/Coin/Coin';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className='app'>
      <Navbar /> {/* Use the correct component name */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/coin/:coinId' element={<Coin/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
