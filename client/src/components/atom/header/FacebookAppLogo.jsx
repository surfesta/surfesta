import * as React from 'react';

function FacebookAppLogo(props) {
  return (
    <svg width="2rem" height="2rem" viewBox="0 0 245 244" {...props}>
      <path
        d="M245 122.746C245 54.955 190.155 0 122.5 0S0 54.955 0 122.746C0 184.01 44.796 234.792 103.36 244v-85.773H72.255v-35.481h31.103V95.703c0-30.763 18.289-47.756 46.27-47.756 13.403 0 27.422 2.398 27.422 2.398v30.207h-15.447c-15.218 0-19.963 9.462-19.963 19.168v23.026h33.974l-5.43 35.48H141.64V244C200.204 234.792 245 184.011 245 122.746"
        fill="#FFFFFE"
        fillRule="evenodd"
      />
    </svg>
  );
}

const MemoFacebookAppLogo = React.memo(FacebookAppLogo);
export default MemoFacebookAppLogo;
