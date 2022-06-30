import { UseFormRegisterReturn } from "react-hook-form";
import styled from "styled-components";
import { IFormInputs } from "../../types";
import Label from "../label/Label";

const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 20px;
  margin-top: 10px;
  background: #F5F5F5;
  border-radius: 8px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #232323;
  
  &.error {
    border: 1px solid #E26F6F;
    caret-color: #E26F6F;
  }
`;

interface IProps {
  props: UseFormRegisterReturn<keyof IFormInputs>;
  name: string;
  type: 'email' | 'password';
  label: string;
  error?: string;
  autoComplete?: string;
}

const Field = ({ props, name, type, label, autoComplete, error = '' }: IProps) => {
  const className = error ? 'error' : '';

  return (
    <Label name={name}>
      {label}
      <StyledInput type={type} id={name} className={className} autoComplete={autoComplete} {...props} />
      <span>{error}</span>
    </Label>
  )
}

export default Field;