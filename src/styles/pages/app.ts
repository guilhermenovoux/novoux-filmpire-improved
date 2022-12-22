import { styled } from "..";

export const ContentContainer = styled('div', {
  flexGrow: 1,
  padding: '2em',

  '@mobile':{
    marginLeft: '0px',

  },
  '@tablet': {
    marginLeft: '240px',

  }

})


export const StyledToolbarApp = styled('div', {
  
  height: '70px'
  
  
})