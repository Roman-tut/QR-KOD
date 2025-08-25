import React from 'react';
import { SCAN_DATA } from '../src/components/constants';

import { QRCodeSVG } from 'qrcode.react';

export const SkanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
  // console.log(data);
  const uniqueData = [...new Set(data)];

  return (
    <div>
      {uniqueData.map((text, index) => (
        <p key={index}>
          {text}
          <QRCodeSVG value={text} size={100} />
        </p>
      ))}
    </div>
  );
};
