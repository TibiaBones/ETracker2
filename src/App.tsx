import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './modules/Header/Header';
import InfoPanel from './modules/InfoPanel/InfoPanel';
import Calendar from './modules/Calendar/Calendar';


function App() {
  return (
    <div>
      <Header/>
      <InfoPanel/>
      <Calendar />
    </div>
  );
}

export default App;
