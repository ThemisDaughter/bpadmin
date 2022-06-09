import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledSidebar = styled(motion.div)`
height: 100vh;
position: sticky;
top: 0;
background-color: black;
padding-left: 3rem;
margin-left: -3rem;
`;

export default StyledSidebar;