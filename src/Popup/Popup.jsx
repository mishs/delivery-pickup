import React from "react";
import Heading from "../components/Heading/Heading";
import PopupContainer from "./PopupContainer";

function Popup(props) {
  const { content, open, setOpen } = props;
  return (
    <PopupContainer className={open ? "open" : ""}>
      <div className="popup">
        <Heading type="smallTitle" className="popup-title">
          Popup Title
          <span
            className="close"
            to="/"
            onClick={() => {
              setOpen();
            }}
          >
            X
          </span>
        </Heading>
        <div className="popup-content">{content}</div>
      </div>
    </PopupContainer>
  );
}

export default Popup;
