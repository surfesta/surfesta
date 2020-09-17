import React, { useCallback, useState } from "react";
import QrReader from "react-qr-reader";
import { useSelector } from "react-redux";
import "./qrscanner.scss";

export default function QrScanner() {
  const [result, setResult] = useState("QR Code를 스캔해주세요.");
  const _event = useSelector((state) => state.events.events[1]);
  console.log(_event);
  const handleScan = useCallback(
    (data) => {
      if (data) {
        const findData = _event.enlisted_users.find(
          (item) => item._id === data
        );
        if (!findData) {
          setResult("불일치");
        } else {
          setResult("일치");
        }
      }
    },
    [result]
  );
  const handleError = useCallback((err) => {
    console.error(err);
  });

  return (
    <div className="qr-container">
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        resolution={1400}
      />
      <div className="qr-result">
        <p>{result}</p>
      </div>
    </div>
  );
}
