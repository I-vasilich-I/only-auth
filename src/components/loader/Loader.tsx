import styled from "styled-components";

interface IProps {
  isOn?: boolean;
}

const Line = styled.div`
  width: 100%;
  height: 3px;
  position: absolute;
  bottom: -10px;
  overflow: hidden;
  background-color: #F5F5F5;
  border-radius: 20px;

  &:before {
    content: "";
    position: absolute;
    left: -50%;
    height: 3px;
    width: 40%;
    background-color: #4A67FF;
    border-radius: 20px;
    animation: loader 1.5s linear infinite;
  }

  @keyframes loader {
    0% {
        left: -40%;
    }
    50% {
        left: 20%;
        width: 80%;
    }
    100% {
        left: 100%;
        width: 100%;
    }
  }
`;

const Loader = ({ isOn = false }: IProps): JSX.Element | null => (isOn ? <Line /> : null);

export default Loader;