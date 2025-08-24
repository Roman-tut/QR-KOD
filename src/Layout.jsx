import React from 'react';
import { QrCodeGenerator } from './QrCodeGenerator';
import { QrCodeScanner } from './SkanerQrCode';

export const Layout = () => {
  return (
    <div>
      {/* <QrCodeGenerator /> */}
      <QrCodeScanner />
    </div>
  );
};
