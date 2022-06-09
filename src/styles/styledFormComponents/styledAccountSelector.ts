import styled from 'styled-components';

export const StyledAccountSelector = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
grid-column: span 4;
font-size: 1.4rem;
background-color: black;
color: white;
.hidden {
  display: none;
}
.icon {
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.3s;
}
.icon:hover {
  color: orange;
  transform: scale(1.1);
  transition: transform 0.3s;
}
`