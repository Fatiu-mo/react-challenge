import React from 'react';
import './style.css';
import Header from './components/Header';
import Main from './components/Main';

export default function App() {
  return (
    <div className={'container'}>
      <Header />
      {/* Create Card Component Here */}
      <div className='main-container'>
        <Main />
      </div>

    </div>
  );
}
