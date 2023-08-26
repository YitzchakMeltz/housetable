import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import AddHouse from './Pages/AddHouse';
import ViewHouse from './Pages/ViewHouse';
import FindHouse from './Pages/FindHouse';

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