import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import AddHouse from './AddHouse';
import HouseLookup from './HouseLookup';

function AppRoutes() {

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/add-house' element={<AddHouse/>} />
          <Route path='/search' element={<HouseLookup/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;