import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'

function AppRoutes() {

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          {/* <Route path='/sagycalculator' element={<SagyCalculator/>} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;