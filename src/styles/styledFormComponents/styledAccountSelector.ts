import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledAccountSelector = styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-evenly;
grid-column: span 4;
font-size: 1.4rem;
// background-color: black;
// color: white;

`
export const StyledSocialAccount = styled(motion.label)<{checked: boolean}>`

.icon {
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.3s;
  color: ${({ checked }) => checked ? '#ff7700' : 'black'};
  ${(props)=>props.checked ? 'font-size: 1.8rem' : null}
}
.icon:hover {
  color: orange;
  transform: scale(1.1);
  transition: transform 0.3s;
}
.hidden {
  display: none;
}
`