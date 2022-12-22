import { createStitches } from "@stitches/react";

export const { 
  config, 
  styled, 
  globalCss,
  css, 
  keyframes, 
  getCssText, 
  theme, 
  createTheme 
} = createStitches({
  media: {
    mobile: '(max-width: 767px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)',
  },
  theme: {
    colors: {
    text: '#121212',
    background: '#FFF',
    rocketseat: '#FF4500',
    }
  }
  
  
})

export const darkTheme = createTheme({
  colors: {
    text: '#FFF',
    background: '#121212'

  },
  
});





