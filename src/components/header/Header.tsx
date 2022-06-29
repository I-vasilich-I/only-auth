import styled from "styled-components"

const HeaderContainer = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  padding-top: 40px;
`;

const Title = styled.h1`
  margin: 0 auto;
  text-transform: uppercase;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 78px;
`;


const Header = () => {
  return (
    <HeaderContainer>
      <Title>only.</Title>
    </HeaderContainer>
  )
}

export default Header;
