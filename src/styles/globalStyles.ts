import { createGlobalStyle } from "styled-components";

export const globalVars = {
  brandColor: '#5485b2',
  primaryColor: 'black',
  lightBg: 'rgb(245, 255, 250)',
  darkBg: '#284158',
  seethroughBg: 'rgba(245, 255, 250, 0.8)',
  margins: {
    inner: {
      sm: '3px .5rem',
      md: '.5rem 2rem',
      lg: '1rem 3rem'
    },
    outer: {
      sm: '3px .5rem',
      md: 'auto 10vw',
      lg: 'auto 15vw'
    }
  },
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