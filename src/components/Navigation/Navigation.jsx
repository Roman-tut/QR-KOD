import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav style={{ display: 'flex', flexDirection: 'column' }}>
      <Link to="/generate"> Генерировать qr code</Link>
      <Link to="/skan"> Сканировать qr code</Link>
      <Link to="/generateHistory"> Истрория генерирования:</Link>
      <Link to="/skanHistory"> История сканирования:</Link>
    </nav>
  );
};
