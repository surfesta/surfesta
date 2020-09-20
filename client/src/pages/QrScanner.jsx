import React, { useEffect, useState } from 'react';
import jsQR from 'jsqr';
import './qrscanner.scss';
import Portal from '../components/Portal';
import { useDispatch } from 'react-redux';
import { startAttendUser } from '../redux/modules/events';
import { go, goBack } from 'connected-react-router';
import { Helmet } from 'react-helmet';

export default function QrScanner({ location, match }) {
  if (!location.state) window.location.href = '/my/event/hosting';

  const dispatch = useDispatch();

  const [userCheck, setUserCheck] = useState({
    loading: false,
    valid: null,
    deviceError: null,
  });
  const { hostingEvent } = location.state;

  let startQRtick;
  let mediaStream;

  const scannerStart = async () => {
    const video = document.createElement('video');
    const canvasElement = document.getElementById('canvas');
    const canvas = canvasElement.getContext('2d');

    // 카메라 사용시
    try {
      mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
      });
      video.srcObject = mediaStream;
      video.setAttribute('playsinline', true); // iOS 사용시 전체 화면을 사용하지 않음을 전달
      video.play();

      setUserCheck((state) => ({ ...state, loading: true }));
      startQRtick = setInterval(() => {
        requestAnimationFrame(() =>
          QRtick(video, canvasElement, canvas, mediaStream),
        );
      }, 230);
    } catch (error) {
      setUserCheck((state) => ({ ...state, deviceError: error }));
      setTimeout(() => {
        dispatch(goBack());
      }, 2000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    scannerStart();

    return () => {
      mediaStream.getTracks()[0].stop();
      clearInterval(startQRtick);
    };
  }, [setUserCheck]);

  function QRtick(video, canvasElement, canvas, mediaStream) {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
      setUserCheck((state) => ({ ...state, loading: false }));
      canvasElement.hidden = false;

      // 읽어들이는 비디오 화면의 크기
      canvasElement.height = video.videoHeight;
      canvasElement.width = video.videoWidth;

      canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

      const imageData = canvas.getImageData(
        0,
        0,
        canvasElement.width,
        canvasElement.height,
      );

      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert',
      });
      // QR코드 인식에 성공한 경우
      if (code) {
        // 인식한 QR코드의 영역을 감싸는 사용자에게 보여지는 테두리 생성
        drawDetectedAreaLine(canvas, code);
        // QR코드 메시지 출력
        const enlisted_user = hostingEvent.enlisted_users.find(
          (user) => user._id === code.data,
        );

        if (enlisted_user) {
          // valid message , have her attended, stop webcam, goback
          setUserCheck((state) => ({ ...state, valid: true }));
          dispatch(startAttendUser(hostingEvent._id, code.data, true));
          mediaStream.getTracks()[0].stop();
          setTimeout(() => {
            dispatch(goBack());
          }, 2000);
        } else {
          setUserCheck((state) => ({ ...state, valid: false }));
          setTimeout(() => {
            setUserCheck((state) => ({ ...state, valid: null }));
          }, 1200);
        }
      }
      // QR코드 인식에 실패한 경우
      else {
        console.log('there is no valid QRcode detected');
      }
    }
  }

  return (
    <>
      <Helmet>
        <title>이벤트 참가신청 리스트</title>
      </Helmet>
      <div className="qr-container">
        {userCheck.valid && (
          <Portal>
            <div id="modal-container">
              <div id="modal" className="confirm-modal">
                <h1 style={{ color: 'springgreen' }}>
                  참가신청한 유저 입니다.
                </h1>
              </div>
            </div>
          </Portal>
        )}
        {userCheck.valid === false && (
          <Portal>
            <div id="modal-container">
              <div id="modal" className="confirm-modal">
                <h1 style={{ color: 'crimson' }}>등록되지 않은 유저 입니다.</h1>
              </div>
            </div>
          </Portal>
        )}
        {userCheck.deviceError && (
          <Portal>
            <div id="modal-container">
              <div id="modal" className="confirm-modal">
                <h1 style={{ color: 'crimson' }}>
                  🎥 비디오 스트림에 액세스 할 수 없습니다.
                  <br />
                  웹캠이 활성화되어 있는지 확인하십시오
                </h1>
              </div>
            </div>
          </Portal>
        )}

        <div className="qr-scanner">
          <div id="frame">
            <div id="loadingMessage">
              {userCheck.loading && '⌛ 스캔 기능을 활성화 중입니다.'}
            </div>

            <canvas id="canvas"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}

function drawLine(canvas, begin, end, color) {
  canvas.beginPath();

  canvas.moveTo(begin.x, begin.y);

  canvas.lineTo(end.x, end.y);

  canvas.lineWidth = 4;

  canvas.strokeStyle = color;

  canvas.stroke();
}

function drawDetectedAreaLine(canvas, code) {
  drawLine(
    canvas,
    code.location.topLeftCorner,
    code.location.topRightCorner,
    '#FF0000',
  );

  drawLine(
    canvas,
    code.location.topRightCorner,
    code.location.bottomRightCorner,
    '#FF0000',
  );

  drawLine(
    canvas,
    code.location.bottomRightCorner,
    code.location.bottomLeftCorner,
    '#FF0000',
  );

  drawLine(
    canvas,
    code.location.bottomLeftCorner,
    code.location.topLeftCorner,
    '#FF0000',
  );
}
