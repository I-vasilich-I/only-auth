import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";
import Label from "../label/Label"

const Check = styled.input`
  width: 10px;
  height: 10px;
  margin-left: 5px;
  margin-right: 24px;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #ffffff;
    border: 1px solid #000000;
    border-radius: 4px;
  }

  &:checked::after {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background: #4A67FF;
    border-radius: 2px;
  }
`;

interface IProps {
  props: UseFormRegisterReturn<"remember">;
  name: string;
  label: string;
}

const Checkbox = ({ props, name, label }: IProps) => {
  return (
    <Label name={name}>
      <Check type="checkbox" id={name} {...props} />
      {label}
    </Label>
  )
}

export default Checkbox;