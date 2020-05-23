import styled from "styled-components";
import Color from "../utils/Colors.js";

export const Header = styled.div`
  margin-top: 50px;
  text-align: center;
  color: ${Color.mainDark};
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
    font-size: 33px;
  }
`;

export const SmallHeader = styled.div`
  margin-top: 10px;
  text-align: center;
  color: ${Color.mainDark};
  @media only screen and (min-width: 520px) {
    transition: all 0.3s linear;
    font-size: 40px;
  }
  @media only screen and (min-width: 370px) and (max-width: 520px) {
    transition: all 0.3s linear;
    font-size: 35px;
  }
  @media only screen and (min-width: 310px) and (max-width: 370px) {
    transition: all 0.3s linear;
    font-size: 30px;
  }
`;
export const XsHeader = styled.div`
  margin-top: 3px;
  text-align: center;
  color: ${Color.mainDark};
  @media only screen and (min-width: 520px) {
    transition: all 0.3s linear;
    font-size: 20px;
  }
  @media only screen and (min-width: 310px) and (max-width: 520px) {
    transition: all 0.3s linear;
    font-size: 18px;
  }
`;

export const Form = styled.div`
  width: 80%;
  padding: 10px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  min-width: 250px;
  background-color: ${Color.mainYellow};
  color: ${Color.mainDark};
  min-height: 200px;
  border-radius: 5px;
`;

export const BigForm = styled(Form)`
  padding: 5px;
  max-width: 700px;
  background-color: ${Color.mainWhite};
  color: ${Color.mainDark};
  min-height: 200px;
  border-radius: 5px;
`;

export const Button = styled.button`
  cursor: pointer;
  font-family: sans-serif;
  text-align: center;
  text-decoration: none;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const ButtonsContainer = styled.div`
  margin: 5px 10px;
  justify-content: space-between;
  display: flex;
`;
export const NavigationButton = styled(Button)`
  background: ${Color.mainDark};
  color: ${Color.mainWhite};
  font-size: 0.9em;
  padding: 0.7em 0.7em;
  border-radius: 25px;
  @media (max-width: 800px) {
    font-size: 0.7em;
    padding: 0.5em 0.5em;
  }
`;

export const UserReview = styled.div``;
export const AllReviews = styled.div``;
export const AddBorder = styled.div`
  border: 0.5px solid;
`;
