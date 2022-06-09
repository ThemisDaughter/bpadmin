import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledToggleContainer = styled(motion.div)`
position: fixed;
display: flex;
align-items: center;
height: 100vh;
width: 15vw;
opacity: 0.3;
.icon {
  font-size: 7rem;
  transform: scaleY(1.2);
  cursor: pointer;
}
`
export default StyledToggleContainer;