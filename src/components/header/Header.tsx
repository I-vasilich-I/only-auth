import styled from "styled-components"

const HeaderContainer = styled.header`
  width: 100%;
`;

const Title = styled.h1`
  text-transform: uppercase;
`;


const Header = () => {
  return (
    <HeaderContainer>
      <Title>only.</Title>
    </HeaderContainer>
  )
}

export default Header;
