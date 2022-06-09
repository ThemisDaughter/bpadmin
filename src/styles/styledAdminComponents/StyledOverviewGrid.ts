import styled from 'styled-components';

const StyledOverviewGrid = styled.div`
display: grid;
width: 100%;
grid-template-columns: repeat(4, 1fr);
grid-gap: 0.3rem 1rem;
background-color: rgba(255, 255, 255, 0.8);
border-radius: 4px;
box-shadow: 1px 1px 12px rgba(0, 0, 0, 0.2);
overflow: hidden;
`;

export default StyledOverviewGrid;