import styled from "styled-components";

interface IProps {
  message: string;
}

const Div = styled.div`
  position: relative;
  max-width: 640px;
  width: 100%;
  min-height: 60px;
  padding: 21px 21px 20px 54px;
  margin-bottom: 27px;

  background: #F5E9E9;
  border: 1px solid #E26F6F;
  border-radius: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;

  &::before {
    content: '!';
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    bottom: 20px;
    background: #FFC8C8;
    border-radius: 50%;
    display: grid;
    place-content: center;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #EE6565;
  }
`

const ServerError = ({ message = '' }: IProps) => {
  if (!message) {
    return null;
  }

  return (
    <Div>{message}</Div>
  )
}

export default ServerError;