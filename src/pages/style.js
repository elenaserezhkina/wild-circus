import styled from "styled-components";
import Color from "../utils/Colors.js";

export const Header = styled.div`
  margin: 50px;
  color: ${Color.mainGreen};
  @media only screen and (min-width: 520px) {
    transition: all 0.3s linear;
    font-size: 50px;
  }
  @media only screen and (min-width: 370px) and (max-width: 520px) {
    transition: all 0.3s linear;
    font-size: 40px;
  }
  @media only screen and (min-width: 310px) and (max-width: 370px) {
    transition: all 0.3s linear;
    font-size: 30px;
  }
`;
