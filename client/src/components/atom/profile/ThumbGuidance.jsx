import React from 'react';

function ThumbGuidance() {
  const spanStyle = {
    border: '2px solid greenyellow',
    display: 'block',
    textAlign: 'center',
    padding: '5px',
  };

  return (
    <div>
      <span style={spanStyle}>png, jpg, jpeg 이미지만 업로드 가능해요.</span>
    </div>
  );
}

export default ThumbGuidance;
