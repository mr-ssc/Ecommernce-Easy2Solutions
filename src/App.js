import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar';
import Slider from './Components/Slider';









function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<Home/>}></Route>
        <Route path='/Navbar' element={<Navbar />}></Route>
        <Route path='/Slider' element={<Slider />}></Route>





      </Routes>




    </>

  );
}

export default App