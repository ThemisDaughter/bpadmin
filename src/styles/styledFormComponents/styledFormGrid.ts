import styled from 'styled-components';
import { globalVars } from 'styles/globalStyles';

export const StyledFormGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
margin: ${globalVars.margins.inner.sm};
grid-gap: 5px;
@media (min-width: ${globalVars.breakpoint.xs}) {
  margin: ${globalVars.margins.inner.md};
}
`
