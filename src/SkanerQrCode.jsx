import React from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import style from './Skaner.module.css';

export const QrCodeScanner = () => {
  const [scanned, setScanned] = useState(null);

  const scanHandler = (result) => {
    setScanned(result[0].rawValue);
  };

  // console.log(scanned);

  return (
    <div className={style.container}>
      <Scanner
        allowMultiple={true}
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
