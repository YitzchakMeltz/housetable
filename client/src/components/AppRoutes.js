import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import AddHouse from './AddHouse';
import ViewHouse from './ViewHouse';
import FindHouse from './FindHouse';

function AppRoutes() {

  return (
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/add-house' element={<AddHouse/>} />
          <Route path='/search' element={<FindHouse/>} />
          <Route path='/view-house' element={<ViewHouse/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;