import { createGlobalStyle } from "styled-components";

export const globalVars = {
  brandColor: '#5485b2',
  primaryColor: 'black',
  lightBg: 'rgb(245, 255, 250)',
  seethroughBg: 'rgba(245, 255, 250, 0.8)',
  breakpoint: {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px'
  }
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
  scroll-behavior: smooth;
}
h1, h2, h3 {
  font-family: 'Alfa Slab One', serif;
}
`;

export default GlobalStyle;