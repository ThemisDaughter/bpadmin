import styled from 'styled-components';

const StyledNav = styled.nav`
display: flex;
position: relative;
flex-direction: column;
text-align: left;
justify-content: flex-start;
align-items: flex-start;
ul {
  list-style: none;
}
li {
  display: flex;
  padding: 0.5rem 1.5rem;
  // background-color: #5485B2;
  border-radius: 6px;
  margin: 1rem;
}
.link{
  text-decoration: none;
  color: white;
}
.x {
  position: absolute;
  right: .5rem;
  top: .5rem;
  font-size: 1.4rem;
  color: white;
  cursor: pointer;
}
`;

export default StyledNav;