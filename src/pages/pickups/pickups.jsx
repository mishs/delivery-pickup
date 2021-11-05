import axios from "axios";
import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
import PickupCard from "../../components/PickupCard/PickupCard";

function Pickups(props) {
  const [pickups, setPickups] = useState([]);
  useEffect(() => {
    if (props.token) {
      axios("https://api.staging.pargo.co.za/pickup_points", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("c_access_token")}`,
        },
      }).then((result) => {
        setPickups(result.data.data);
      });
    }
  }, [props.token]);
  return (
    <div className="page-content">
      <Heading type="title">Pickup Locations</Heading>
      <div className="box">
        <Heading type="subTitle">Select a Pickup</Heading>
        <div className="grid cols-3">
          {pickups && pickups.length
            ? pickups.map((pickup, index) => {
                return <PickupCard key={index} pickup={pickup} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Pickups;
