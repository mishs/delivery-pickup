import axios from "axios";
import React, { useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import Heading from "../../components/Heading/Heading";
import PickupCard from "../../components/PickupCard/PickupCard";

function Pickups(props) {
  const [pickups, setPickups] = useState([]);
  const [cities, setCities] = useState([]);
  const [appliedFilters, setAppliedFilters] = useState([]);

  const applyFilter = (e, filter) => {
    if (e.target.checked) {
      setAppliedFilters([...appliedFilters, filter]);
    } else {
      setAppliedFilters((val) => {
        let filtered = val.filter((val2) => val2 !== filter);
        return filtered;
      });
    }
  };
  useEffect(() => {
    if (props.token) {
      axios("https://api.staging.pargo.co.za/pickup_points", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("c_access_token")}`,
        },
      }).then((result) => {
        setPickups(result.data.data);
        let checkArr = [];
        let cities = result.data.data.filter((val) => {
          let cond;
          if (checkArr.includes(val.attributes.city)) {
            cond = false;
          } else {
            cond = true;
          }
          checkArr.push(val.attributes.city);
          return cond;
        });
        setCities(cities.map((val) => val.attributes.city));
      });
    }
  }, [props.token]);
  return (
    <div className="page-content">
      <Heading type="title">Pickup Locations</Heading>
      <div className="box">
        <Heading type="subTitle">Select a Pickup</Heading>
        <Filters filters={cities} applyFilter={applyFilter} />
        <div className="w-50">
          {pickups && pickups.length
            ? pickups
                .filter((pickup) => {
                  if (appliedFilters.length) {
                    let condition;
                    appliedFilters.map((city) => {
                      if (pickup["attributes"]["city"].includes(city)) {
                        condition = true;
                      } else if (condition !== true) {
                        condition = false;
                      }
                      return condition;
                    });
                    return condition;
                  } else {
                    return true;
                  }
                })
                .map((pickup, index) => {
                  return (
                    <PickupCard key={index} index={index} pickup={pickup} />
                  );
                })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Pickups;
