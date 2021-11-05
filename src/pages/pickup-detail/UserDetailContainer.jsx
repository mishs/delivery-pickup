import styled from "styled-components";

export default styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .user-detail {
    width: 450px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-top: 0;
    padding: 20px 30px;

    .user-detail-title {
      display: flex;
      justify-content: space-between;

      span {
        cursor: pointer;
      }
    }

    .user-detail-content {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      input {
        border: 1px solid #aaa;
        border-radius: 10px;
        outline: none;
        width: 100%;
        padding: 10px 20px;
        font-size: 18px;
        margin-bottom: 16px;
      }
      button {
        border: none;
        outline: none;
        background: #0096ff;
        color: #000;
        font-size: 18px;
        padding: 10px 20px;
        border-radius: 10px;
      }
    }
  }
`;
