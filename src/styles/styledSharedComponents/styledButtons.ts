import styled from 'styled-components';
import { globalVars } from 'styles/globalStyles';

const StyledButton = styled.button``


const StyledSecondaryBtn = styled(StyledButton)`
background-color: ${globalVars.brandColor};
color: white;
border-radius: 3px;
border: 1px solid ${globalVars.lightBg};
`

export { StyledButton, StyledSecondaryBtn };