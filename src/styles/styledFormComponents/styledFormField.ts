import styled from 'styled-components';
import { globalVars } from 'styles/globalStyles';

const { breakpoint } = globalVars;

export const StyledFormField = styled.div<{ span?: string }>`
position: relative;
grid-column: span ${props => props.span || 4} ;
margin: 17px;
// background-color: orange;
@media(max-width: ${breakpoint.sm}) {
  grid-column: span 4;
}
`