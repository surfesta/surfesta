import React, { useEffect, useState } from "react";
import { Prompt } from "react-router-dom";
import ConfirmBox from "../../molecule/createEvent/ConfirmBox";
import Portal from "../../Portal";

export const RouteLeavingGuard = ({
  navigate,
  when,
  shouldBlockNavigation,
  yes,
  no,
  contentTop,
  contentBottom,
}) => {
  const [modalVisible, updateModalVisible] = useState(false);
  const [lastLocation, updateLastLocation] = useState();
  const [confirmedNavigation, updateConfirmedNavigation] = useState(false);

  const showModal = (location) => {
    updateModalVisible(true);
    updateLastLocation(location);
  };

  const closeModal = (cb) => {
    updateModalVisible(false);
    if (cb) {
      cb();
    }
  };

  const handleBlockedNavigation = (nextLocation) => {
    if (!confirmedNavigation && shouldBlockNavigation(nextLocation)) {
      showModal(nextLocation);
      return false;
    }
    return true;
  };
  const handleConfirmNavigationClick = () => {
    closeModal(() => {
      if (lastLocation) {
        updateConfirmedNavigation(true);
      }
    });
  };

  useEffect(() => {
    if (confirmedNavigation) {
      navigate(lastLocation.pathname);
      updateConfirmedNavigation(false);
    }
  }, [confirmedNavigation]);

  return (
    <>
      <Prompt when={when} message={handleBlockedNavigation} />
      <ConfirmBox
        yes={yes}
        no={no}
        visible={modalVisible}
        onCancel={closeModal}
        onConfirm={handleConfirmNavigationClick}
        className="prompt-guide"
      >
        {contentTop}
        <br />
        {contentBottom}
      </ConfirmBox>
    </>
  );
};

export default RouteLeavingGuard;
