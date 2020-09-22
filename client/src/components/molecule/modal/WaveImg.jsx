import * as React from 'react';

function WaveImg(props) {
  return (
    <svg width={1600} height={160} fill="none" {...props}>
      <path
        d="M0 0c200 0 200 33.214 400 33.214S600 0 800 0s200 33.214 400 33.214S1400 0 1600 0v160H0V0z"
        fill="#3562FF"
      />
    </svg>
  );
}

const MemoWaveImg = React.memo(WaveImg);
export default MemoWaveImg;
