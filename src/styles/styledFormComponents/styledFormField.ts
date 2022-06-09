import styled from 'styled-components';

export const StyledFormField = styled.div<{ span?: string }>`
position: relative;
grid-column: span ${props => props.span || 4} ;
margin: 17px;
// background-color: orange;
`