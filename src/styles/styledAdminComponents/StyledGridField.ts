import styled from 'styled-components';
// import { globalVars }from 'styles/globalStyles'

interface IProps {
  xstart: number;
  xend: number;
  ystart?: number;
  yend?: number;
}

const StyledGridField = styled.div<IProps>`
display: flex;
justify-content: center;
grid-column: ${props => props.xstart} / ${props => props.xend};
grid-row: ${props => props.ystart} / ${props => props.yend};
position: relative;
img {
  max-width: 100%;
  height: 100%;
}
&.left-align {
  justify-self: flex-start;
}
.remove-padding {
  margin: 0.1rem;
  padding: 0.1rem;
  align-self: flex-end;
}
`
const StyledGridButtons = styled(StyledGridField)`
background-color: rgba(143, 193, 237, 0.1);

`


export {StyledGridField, StyledGridButtons}