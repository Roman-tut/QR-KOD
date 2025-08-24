import React from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import style from '../Skan/Skaner.module.css';
import { SCAN_DATA } from '../../components/constants';

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    // console.log(prevData);

    // console.log(prevData);

    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, result[0].rawValue]));
  };

  // console.log(scanned);
  // console.log(SCAN_DATA);

  return (
    <div className={style.container}>
      <Scanner
        onScan={scanHandler}
        components={{
          audio: false,
          finder: false,
        }}
        styles={{
          container: {
            with: 250,
          },
        }}
      />
      <p className={style.result}>{scanned}</p>
    </div>
  );
};
