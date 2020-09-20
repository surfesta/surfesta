import React, { useRef, useState } from "react";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import Portal from "../../Portal";
import { useDispatch, useSelector } from "react-redux";
import { toggleEnlistedEvent } from "../../../redux/modules/auth";
import { toggleEnlistedUser } from "../../../redux/modules/events";
import ConfirmModal from "../../molecule/eventCategories/ConfirmModal";

export default function EnlistedPageButtons({ event }) {
  const btnRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [qrSelect, setQrSelect] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const qr = `https://api.qrserver.com/v1/create-qr-code/?data=${user._id}&size=240x240`;
  const eventId = event && event._id;
  const userId = user && user._id;

  const toggleEnlisted = () => {
    dispatch(toggleEnlistedEvent(eventId, userId, false));
    dispatch(toggleEnlistedUser(eventId, userId, false));
    setVisible(false);
  };

  return (
    <>
      <img src={qr} style={{ display: "none" }} hidden />
      <IconButton
        ref={btnRef}
        className="qr-imgbox"
        onClick={(e) => {
          setQrSelect(true);
          // const ripples = document.createElement("span");
          // btnRef.current.appendChild(ripples);

          // setTimeout(() => {
          //   ripples.remove();
          // }, 500);
        }}
      >
        <div className="qr-img" />
      </IconButton>
      {qrSelect && (
        <Portal>
          <div
            id="modal-container"
            onClick={(e) => {
              if (!(e.target === e.currentTarget)) return;
              setQrSelect(false);
            }}
          >
            <div id="modal" className="confirm-modal">
              <h1 style={{ marginBottom: "3rem" }}>내 QR코드</h1>
              <img src={qr} />
            </div>
          </div>
        </Portal>
      )}
      <IconButton
        onClick={() => {
          setVisible(true);
        }}
      >
        <DeleteIcon />
      </IconButton>

      {visible && (
        <ConfirmModal toggleEnlisted={toggleEnlisted} setVisible={setVisible} />
      )}
    </>
  );
}
