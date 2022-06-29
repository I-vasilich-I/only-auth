import { useContext } from "react";
import styled from "styled-components";
import Context from "../../context/Context";

const Div = styled.div`
  margin: auto;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;

  
  p {
    margin-bottom: 80px;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #000000;
    text-align: center;
    overflow-wrap: anywhere;
  }
  
  button {
    width: 200px;
    height: 60px;
    background: #F5F5F5;
    border-radius: 8px;
    border: none;
    outline: none;
    cursor: pointer;
    
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    transition: all .3s ease-in-out;

    &:hover, &:focus {
      background: #e2e0e0;
    }
  }

  @media (max-width: 550px) {
    p {
      font-size: 30px;
      line-height: 38px;
    }
  }
`;

const LogOut = () => {
  const { user, setUser } = useContext(Context);

  return (
    <Div>
      <p>Здравствуйте, <strong>{user}</strong></p>
      <button onClick={() => setUser(null)}>Выйти</button>
    </Div>
  )
}

export default LogOut;