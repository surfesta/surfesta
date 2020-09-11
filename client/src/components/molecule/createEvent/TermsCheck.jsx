import React from 'react';

export default function TermsCheck({ termsToggle }) {
  return (
    <div className="event-sec">
      <div className="input-box label-box terms">
        <input type="checkbox" id="termscheck" onChange={termsToggle} />
        <label className="custom-label" htmlFor="termscheck"></label>
        <span>
          주최자 안내사항을 읽었습니다. 또한 surFesta 이용약관 및 surFesta Code
          of Conduct를 준수할 것을 동의합니다.
        </span>
      </div>
    </div>
  );
}
