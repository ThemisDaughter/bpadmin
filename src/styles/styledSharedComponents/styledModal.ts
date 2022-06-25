import styled from 'styled-components';
import { globalVars } from 'styles/globalStyles';

const StyledModal = styled.div`
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
left: 0;
top: 0;
height: 100vh;
width: 100vw;
background-color: ${globalVars.seethroughBg};
z-index: 100;
.popup{
  background-color: ${globalVars.lightBg};
  border: 1px solid grey;
  border-radius: 5px;
  width: 60%;
  min-width: 300px;
  max-width: 600px;
  margin: auto;
}
.body {
  margin: 15px 25px;
  overflow: scroll;
  max-height: 100vh;
}
.header {
  display: flex;
  justify-content: space-between;
  padding: 4px;
}
`

export default StyledModal;