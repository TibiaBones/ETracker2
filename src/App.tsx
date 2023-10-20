import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import InfoPanel from './components/InfoPanel/InfoPanel';
import Calendar from './components/Calendar/Calendar';
import {createDate} from '@/utils/helpers/date/createDate';

console.log(createDate());

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
