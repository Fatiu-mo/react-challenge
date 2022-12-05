import React from 'react';
import './style.css';
import Header from './components/Header';
import Calc from './components/Calc';
import Weather from './components/Weather'

export default function App() {
  return (
    <div className={'container'}>
      <Header />
      {/* Create Card Component Here */}
      <div className='main-container'>
        <Calc />
        <Weather />
      </div>

    </div>
  );
}
