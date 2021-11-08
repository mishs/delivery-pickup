import styled from "styled-components";

const FiltersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 16.6%);
  flex-wrap: wrap;
  grid-column-gap: 10px;
  max-height: 210px;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 800px) {
    grid-template-columns: repeat(4, 25%);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 50%);
  }

  .filter {
    display: flex;
    align-items: center;

    input {
      margin-right: 6px;
    }
  }
`;

export default FiltersContainer;
