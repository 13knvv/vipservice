import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './App.module.css'
import FlightCardPageContainer from './Components/FlightCardPage/FlightCardPageContainer';
import SearchFormPageContainer from './Components/SearchFormPage/SearchFormPageContainer';

const App = () => {
  
  return (
    <div className={s.container}>
      <Routes>
        <Route path='/' element={<SearchFormPageContainer />} />
        <Route path='/avia' element={<SearchFormPageContainer />} />
        <Route path='/avia/info' element={<FlightCardPageContainer />} />
      </Routes>
    </div>
  )
}

export default App;
