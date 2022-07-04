import styled from 'styled-components';
import { motion } from 'framer-motion';
import { globalVars } from 'styles/globalStyles';

const StyledButton = styled(motion.button)`
padding: .7rem 1.4rem;
border-radius: 6px;
`

const SolidButton = styled(StyledButton)`
background-color: ${globalVars.darkBg};
color: ${globalVars.lightBg};
border: 0;
margin: 5px 1rem;
@media (min-width: ${globalVars.breakpoint.xs}){
  margin: 1rem 2.5rem;
}
@media(min-width: ${globalVars.breakpoint.md}){
  margin: ${globalVars.margins.inner.lg}
}

`

const StyledOutlineBtn = styled(StyledButton)`
background-color: ${globalVars.brandColor};
color: transparent;
border-radius: 3px;
border: 1px solid ${globalVars.lightBg};
`

export { StyledButton, StyledOutlineBtn, SolidButton };