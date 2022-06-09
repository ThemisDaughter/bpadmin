import styled from 'styled-components';

export const StyledConfirmationSection = styled.div`
grid-column: span 4;
.field {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 1rem 0;
}
.value {
  width: 100%;
}
.title {
  font-weight: regular;
  font-size: 1.2rem;
  width: 100%;
  color: grey;
  border-bottom: solid 1px grey
}
`

