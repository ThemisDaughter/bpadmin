import styled from 'styled-components';
import { motion } from 'framer-motion'
import { globalVars } from 'styles/globalStyles';

const StyledAdminButton = styled(motion.button)`
display: flex;
padding: 0.5rem 1rem;
margin: 0.5rem 3rem;
border: solid 2px transparent;
border-radius: 5px;
background-color: white;
box-shadow: 1px 1px 7px rgba(50, 50, 150, 0.4);
cursor: pointer;
// generally: don't mix css animations with other animations
&:hover {
  border-color: ${globalVars.brandColor};
  transform: scale(1.1);
  transition: all;
  transition-duration: 0.2s;
}
`
const StyledAcceptButton = styled(StyledAdminButton)`
`

export { StyledAdminButton, StyledAcceptButton };