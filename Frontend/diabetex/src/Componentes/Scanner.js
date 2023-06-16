import React, { useState } from 'react';
/*import { QrReader } from 'react-qr-reader';

const BarcodeScanner = () => {
  const [barcode, setBarcode] = useState('');

  const handleScan = (data) => {
    if (data) {
      setBarcode(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader 
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ height: '100%'}}
       

      />
      <p>{barcode && `Código de barras: ${barcode}`}</p>
    </div>
  );
};

export default BarcodeScanner;

*/