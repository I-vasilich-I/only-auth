import styled from "styled-components";

const Button = styled.input`
  position: relative;
  max-width: 640px;
  width: 100%;
  height: 60px;

  border-radius: 8px;
  border: none;
  outline: none;
  background: #4A67FF;
  cursor: pointer;

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  transition: background .3s ease-in-out;

  &:disabled {
    background: #99A9FF;
    cursor: unset;
  }

  &:hover:not(:disabled), &:focus {
    background: #2449fe;
  }

  &:active:not(:disabled) {
    transform: translate(2px, 2px);
  }
`;

interface IProps {
  name: string;
  isDisabled: boolean;
}

const SubmitButton = ({ name, isDisabled = false }: IProps) => {
  return (
    <Button type="submit" value={name} disabled={isDisabled} />
  )
}

export default SubmitButton;