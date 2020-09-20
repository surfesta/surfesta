import React, { useRef } from "react";

export default function TermsCheck({ termsToggle }) {
  const Ref = useRef(null);
  return (
    <div className="event-sec">
      <div className="input-box label-box terms">
        <input
          type="checkbox"
          id="termscheck"
          onChange={termsToggle}
          ref={Ref}
        />
        <label className="custom-label" htmlFor="termscheck"></label>
        <span
          onClick={(e) => {
            termsToggle(e);
            Ref.current.checked = Ref.current.checked ? false : true;
          }}
        >
          주최자 안내사항을 읽었습니다. 또한 Surfesta 이용약관 및 Surfesta Code
          of Conduct를 준수할 것을 동의합니다.
        </span>
      </div>
    </div>
  );
}
