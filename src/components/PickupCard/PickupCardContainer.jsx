import styled from "styled-components";

export default styled.div`
  margin: auto;
  max-width: 50vw;

  & > h4 {
    margin: 0;
    margin-top: 20px;
    display: flex;
    padding: 10px 20px;
    justify-content: space-between;
    background: #fff200;
    color: #000;
    cursor: pointer;
    clear: both;
    min-width: fit-content;
  }
  .pickup-details {
    background: #ddd;
    padding: 10px 20px;

    h4 {
      border-right: 1px solid #000;
      border-bottom: 1px solid #000;
      font-size: 20px;
      font-weight: 400;

      span {
        font-weight: 600;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .select-location-btn {
    border: none;
    outline: none;
    background: #006400;
    color: #000;
    padding: 10px 20px;
    font-size: 16px;
    float: right;
    margin-bottom: 20px;
    cursor: pointer;
    text-decoration: none;
  }
`;
