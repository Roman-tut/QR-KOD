import React from 'react';
import { QrCodeGenerator } from './components/Generation/QrCodeGenerator';
import { QrCodeScanner } from './components/Skan/SkanerQrCode';
import { Navigation } from './components/Navigation/Navigation';
import style from './components/Navigation/Navigation.module.css';
import { Routes, Route } from 'react-router-dom';
import { SkanHistory } from './SkanHistory';
import { GenerateHistory } from './GenerateHistory';

export const Layout = () => {
  return (
    <div className={style.container}>
      <Navigation />

      <Routes>
        <Route path="/generate" element={<QrCodeGenerator />} />
        <Route path="/skan" element={<QrCodeScanner />} />
        <Route path="/skanHistory" element={<SkanHistory />} />
        <Route path="/generateHistory" element={<GenerateHistory />} />
      </Routes>
    </div>
  );
};
