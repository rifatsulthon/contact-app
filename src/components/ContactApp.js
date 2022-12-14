import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';
 
 
function ContactApp() {
  return (
    <div className="contact-app">
      <header className='contact-app__header'>
        <h1>Aplikasi Kontak</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/contacts/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}
 
export default ContactApp;