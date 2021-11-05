import React, { useState } from "react";
import { useNavigate } from "react-router";
import Heading from "../../components/Heading/Heading";
import Popup from "../../Popup/Popup";
import UserDetailContainer from "./UserDetailContainer";

function UserDetail(props) {
  const [username, setUsername] = useState("");
  const [contact, setContact] = useState("");
  const refNo = "Rf-001";
  const [popup, setPopup] = useState(false);
  let navigate = useNavigate();
  return (
    <UserDetailContainer>
      <div className="user-detail">
        <Heading type="subTitle" className="user-detail-title">
          Enter Details
        </Heading>
        <div className="user-detail-content">
          <input
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Contact No."
            onChange={(e) => setContact(e.target.value)}
          />
          <button
            onClick={() => {
              localStorage.setItem(
                "pickupUserDetail",
                JSON.stringify({ username, contact }),
              );
              setPopup(true);
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <Popup
        open={popup}
        setOpen={() => {
          setPopup(false);
          if (username && contact) {
            navigate("/");
          }
        }}
        content={
          username && contact ? (
            <>
              <Heading type="smallTitle" className="confirm-detail">
                <span>Username: </span> {username}
              </Heading>
              <Heading type="smallTitle" className="confirm-detail">
                <span>Contact: </span> {contact}
              </Heading>
              <Heading type="smallTitle" className="confirm-detail">
                <span>Ref No: </span> {refNo}
              </Heading>
              <Heading type="smallTitle" className="confirm-detail">
                <span>Note: </span> Please bring your ID for verification
              </Heading>
            </>
          ) : (
            <Heading type="smallTitle" className="confirm-detail">
              <span>Please fill all fields(Username and Password)</span>
            </Heading>
          )
        }
      />
    </UserDetailContainer>
  );
}

export default UserDetail;
