import styled from 'styled-components';

const StyledCreatorInfoTable = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(3, 1fr);
.name {
  grid-column: 1 / 2;
}
.property {
  grid-column: 2 / span 2;
}
.title {
  grid-column: 1 / 4;
}
`

export default StyledCreatorInfoTable;