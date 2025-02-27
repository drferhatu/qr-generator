import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Link, QrCode } from 'lucide-react';

function App() {
  const [url, setUrl] = useState('https://example.com');
  const [qrSize, setQrSize] = useState(256);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQrSize(Number(e.target.value));
  };

  const isValidUrl = (string: string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <QrCode className="text-indigo-600 mr-2" size={28} />
          <h1 className="text-2xl font-bold text-gray-800">QR Code Generator</h1>
        </div>
        
        <div className="mb-6">
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
            Enter Website URL
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Link className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="url"
              value={url}
              onChange={handleUrlChange}
              placeholder="https://example.com"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {url && !isValidUrl(url) && (
            <p className="mt-1 text-sm text-red-600">Please enter a valid URL (include https://)</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
            QR Code Size: {qrSize}px
          </label>
          <input
            type="range"
            id="size"
            min="128"
            max="512"
            step="8"
            value={qrSize}
            onChange={handleSizeChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
        </div>

        <div className="flex flex-col items-center justify-center bg-gray-50 p-4 rounded-lg">
          {isValidUrl(url) ? (
            <>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <QRCodeSVG
                  value={url}
                  size={qrSize}
                  bgColor="#FFFFFF"
                  fgColor="#000000"
                  level="H"
                  includeMargin={false}
                />
              </div>
              <p className="mt-3 text-sm text-gray-500 text-center">
                Scan this QR code to visit: <br />
                <span className="font-medium text-indigo-600 break-all">{url}</span>
              </p>
            </>
          ) : (
            <div className="text-center p-8 text-gray-500">
              Enter a valid URL to generate a QR code
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          Tip: You can right-click on the QR code to save it as an image
        </div>
        <div className="mt-2 text-center text-xs text-gray-500 font-semibold">
        Assoc. Prof. Ferhat Ucar
        </div>
      </div>
    </div>
  );
}

export default App;
