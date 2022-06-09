import { createGlobalStyle } from "styled-components";

export const globalVars = {
  brandColor: '#5485b2',
  primaryColor: 'black'

};

const GlobalStyle = createGlobalStyle`
body {
  position: relative;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background: #5485b2;
  font-family: sans-serif;
}
h1, h2, h3 {
  font-family: 'Alfa Slab One', serif;
}
`;

export default GlobalStyle;