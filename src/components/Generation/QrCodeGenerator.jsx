import React from 'react';
import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import style from '../Generation/qrCode.module.css';

import { GENERATE_DATA } from '../constants';

export const QrCodeGenerator = () => {
  const [value, setValue] = useState('');
  const [showQrCode, setShowQrCode] = useState('');

  //   console.log(array[0]); //value
  //   console.log(array[1]); //function

  const onClicHandler = (event) => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    // console.log('gegegerag', event); //проверяли евент
    setShowQrCode(value);
    setValue('');
  };

  const onChangeHandler = (event) => {
    // console.log(event.target.value); // targetvalue
    setValue(event.target.value);
    setShowQrCode('');
  };
  console.log(showQrCode);

  return (
    <div className={style.container}>
      {/* {isShowQrCode === true ? <QRCodeSVG value={value} /> : null} */}
      {/* {isShowQrCode ? <QRCodeSVG value={value} /> : null}  */}

      <input
        type="text"
        value={value}
        placeholder="Введите текст..."
        onChange={onChangeHandler}
        className={style.input}
      />
      <button type="button" onClick={onClicHandler} className={style.button}>
        Сгенерировать QR Code
      </button>
      {showQrCode !== '' && (
        <div className={style.qrWrapper}>
          <QRCodeSVG value={value} size={200} />
        </div>
      )}
    </div>
  );
};
