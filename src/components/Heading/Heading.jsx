import styled from "styled-components";

const Heading = styled.h4`
  ${(props) => {
    if (props.type === "title") {
      return `
            font-size: ${props.fontSize ? props.fontSize : "36px"};
            font-weight: ${props.fonWeight ? props.fontWeight : "700"};
            letter-spacing: 6px;
            margin-bottom: ${props.marginBottom ? props.marginBottom : "24px"};
            margin-left: ${props.marginLeft ? props.marginLeft : "5%"};
            font-family: 'Lobster', cursive;
            color: ${props.color ? props.color : ""}
          `;
    }
    if (props.type === "subTitle") {
      return `
              font-size: ${props.fontSize ? props.fontSize : "26px"};
              font-weight: ${props.fonWeight ? props.fontWeight : "500"};
              letter-spacing: 2px;
              margin-bottom: ${
                props.marginBottom ? props.marginBottom : "16px"
              };
              margin-left: ${props.marginLeft ? props.marginLeft : "5%"};
              font-family: 'Montserrat', sans-serif;
              color: ${props.color ? props.color : ""}
            `;
    }
    if (props.type === "smallTitle") {
      return `
                font-size: ${props.fontSize ? props.fontSize : "18px"};
                font-weight: ${props.fonWeight ? props.fontWeight : "500"};
                letter-spacing: 2px;
                margin-bottom: ${
                  props.marginBottom ? props.marginBottom : "16px"
                };
                font-family: 'Montserrat', sans-serif;
                color: ${props.color ? props.color : ""}
              `;
    }
    if (props.type === "para") {
      return `
                font-size: ${props.fontSize ? props.fontSize : "16px"};
                font-weight: ${props.fonWeight ? props.fontWeight : "400"};
                letter-spacing: 2px;
                margin-bottom: ${
                  props.marginBottom ? props.marginBottom : "20px"
                };
                line-height: 1.5;
                font-family: 'Montserrat', sans-serif;
                color: ${props.color ? props.color : ""}
              `;
    }
  }}
`;

export default Heading;
