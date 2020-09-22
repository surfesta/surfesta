import React from 'react';
import WaveImg from './WaveImg';
import './WaveSurf.scss';

export default function WaveSurf() {
  return (
    <div className="wave-surfer-comp">
      <div className="wave wave-1">
        <WaveImg />
      </div>
      <div className="wave wave-2">
        <WaveImg />
      </div>
    </div>
  );
}
