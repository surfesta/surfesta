import * as React from 'react';
import './Logo.scss';

function Logo(props) {
  return (
    <div id="logo" {...props}>
      Surfesta
    </div>
  );
}

const MemoLogo = React.memo(Logo);
export default MemoLogo;
