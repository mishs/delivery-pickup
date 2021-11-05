import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../Heading/Heading";
import PickupCardContainer from "./PickupCardContainer";

function PickupCard(props) {
  const { pickup, index } = props;
  const [open, setOpen] = useState(false);
  return (
    <PickupCardContainer>
      <Heading
        type="subTitle"
        color="#fff"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {pickup.attributes.name}{" "}
        {open ? <span>&#9650;</span> : <span>&#9660;</span>}
      </Heading>
      {open ? (
        <div className="pickup-details">
          {pickup ? (
            <>
              <Heading type="smallTitle">
                <span className="detail-title">Address1: </span>
                {pickup["attributes"]["address1"]}
              </Heading>
              <Heading type="smallTitle">
                <span className="detail-title">Address2: </span>
                {pickup["attributes"]["address2"]}
              </Heading>
              <Heading type="smallTitle">
                <span className="detail-title">City: </span>
                {pickup["attributes"]["city"]}
              </Heading>
              <Heading type="smallTitle">
                <span className="detail-title">Country: </span>
                {pickup["attributes"]["country"]}
              </Heading>
              <Heading type="smallTitle">
                <span className="detail-title">Pickup Point Code: </span>
                {pickup["attributes"]["pickupPointCode"]}
              </Heading>
              <Heading type="smallTitle">
                <span className="detail-title">Postal Code: </span>
                {pickup["attributes"]["postalCode"]}
              </Heading>
              <Heading type="smallTitle">
                <span className="detail-title">Province: </span>
                {pickup["attributes"]["province"]}
              </Heading>
              <Heading type="smallTitle">
                <span className="detail-title">Suburb: </span>
                {pickup["attributes"]["suburb"]}
              </Heading>
            </>
          ) : null}
        </div>
      ) : null}
      {open ? (
        <Link
          onClick={() => {
            localStorage.setItem("pickupLocation", JSON.stringify(pickup));
          }}
          className="select-location-btn"
          to={"/user-detail/" + index}
        >
          Select this location
        </Link>
      ) : null}
    </PickupCardContainer>
  );
}

export default PickupCard;
