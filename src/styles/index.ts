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
    mobile: '(min-width: 200px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)',
  },
  theme : {
    colors: {
      rocketseat: '#FF4500',
    }
  }
})


