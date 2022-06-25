import styled from 'styled-components';

interface IProps  {
  direction?: string;
  justify?: string;
}

const StyledStack = styled.div<IProps>`
display: flex;
flex-direction: ${props => props.direction || 'row'};
justify-content: ${props => props.justify || 'space-evenly' };

`
export default StyledStack;