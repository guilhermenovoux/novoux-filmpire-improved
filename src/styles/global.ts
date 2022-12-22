import { color } from "@mui/system";
import { globalCss } from ".";


export const gloabalStyles = globalCss({
  'a': {
    margin: 0,
    padding: 0,
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    background: '$background',
    color: '$text'
  },

  'body, input, textarea, button': {
    fontFamily: 'Montserrat',
    fontWeight: 400,
  },
  root: {
    display: 'flex',
    height: '100%'
  }
  
})





