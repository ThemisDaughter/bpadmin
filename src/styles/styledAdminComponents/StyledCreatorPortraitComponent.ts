import styled from 'styled-components';


interface Props {
  size: number;
}


const StyledCreatorPortraitComponent = styled.div<Props>`
display: flex;
flex-direction: column;
justify-content: center;
width: 80%;
align-items: center;
.title{
  margin: 0.4rem 0;
  text-align: center;
}
.img-container {

    display: grid;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    position: relative;
    width: ${props => props.size}rem;
    aspect-ratio: 1;
    border-radius: 50%;
    overflow: hidden;
    img {
      position: absolute;
    }
 
`

export default StyledCreatorPortraitComponent;