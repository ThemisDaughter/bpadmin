import styled from 'styled-components';
import { motion } from 'framer-motion';
import { globalVars } from '../globalStyles';

const StyledDashboardGrid = styled(motion.div)`
display: grid;
width: 100%;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(auto, 1fr);
grid-gap: 1rem 0;
.heading {
  border-bottom: solid 1px ${globalVars.primaryColor};
}
.full-w {
  grid-column: span 6;
}
`

export default StyledDashboardGrid;