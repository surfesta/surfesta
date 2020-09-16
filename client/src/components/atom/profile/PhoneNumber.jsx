import React from 'react';

export default function PhoneNumber({ phoneNumber, phoneNumChange }) {
  // const num = phoneNumber + "";
  // const PhoneNumber = `0` + num;
  // const phone_num = `${+PhoneNumber}`;
  // const phone_num = (e) => {
  //   const inputValue = e.target.value;
  //   inputValue.replace(/^0+/, "");
  // };
  // console.log(phone_num);

  return (
    <div className="form-div">
      <label>전화번호</label>
      <input
        type="tel"
        name="phone_number"
        value={phoneNumber}
        onChange={phoneNumChange}
      />
    </div>
  );
}
