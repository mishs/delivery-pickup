import React from "react";
import styled from "styled-components";

const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 16.6%);
  flex-wrap: wrap;
  grid-column-gap: 10px;

  .filter {
    display: flex;
    align-items: center;

    input {
      margin-right: 6px;
    }
  }
`;

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
