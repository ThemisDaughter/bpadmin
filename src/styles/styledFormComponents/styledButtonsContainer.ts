import styled from 'styled-components';
import { globalVars } from 'styles/globalStyles';

export const StyledButtonsContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
height: 100%;
align-items: bottom;
.removeStyling {
  background-color: ${globalVars.darkBg};
  border: none;
  margin: 0;
  padding: 0;
  color: white
}
`