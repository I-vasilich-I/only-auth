import { ReactNode } from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  width: 100%;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  &:last-of-type {
    margin-bottom: 40px;
  }

  span {
    margin-top: 8px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #E26F6F;
  }
`;

interface IProps {
  name: string; 
  children?: ReactNode;
};

const Label: React.FC<IProps> = ({ name, children }) => {
  return (
    <StyledLabel htmlFor={name}>
      {children}
    </StyledLabel>
  )
}

export default Label;