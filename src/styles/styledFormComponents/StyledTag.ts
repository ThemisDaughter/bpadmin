import styled from 'styled-components';


const StyledTag = styled.div<{colour?: string}>`
border: solid 2px ${props => props.colour || 'grey'} ;
border-radius: 9px;
margin: 0 .2rem;
padding: 0.5rem 1rem;

`

export  {StyledTag};