import styled from "styled-components";
export default styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;

  &.open {
    display: flex;
  }

  .popup {
    width: 450px;
    background: #fff;

    .popup-title {
      display: flex;
      justify-content: space-between;
      padding: 20px 14px;
      //   font-size: 28px;

      .close {
        cursor: pointer;
        text-decoration: none;
      }
    }

    .popup-content {
      padding: 20px 14px;
    }
  }
`;
