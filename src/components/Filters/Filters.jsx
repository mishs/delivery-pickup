import React from "react";
import FiltersContainer from "./FiltersContainer";

function Filters(props) {
  const { filters, applyFilter } = props;
  return (
    <FiltersContainer>
      {filters && filters.length
        ? filters.map((filter, i) => {
            return (
              <div className="filter" key={i}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={(e) => applyFilter(e, filter)}
                />
                <label htmlFor="">{filter}</label>
              </div>
            );
          })
        : null}
    </FiltersContainer>
  );
}

export default Filters;
