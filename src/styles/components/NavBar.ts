import { styled, theme } from "..";
import { css } from "@stitches/core";
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar,   } from '@mui/material'
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'


export const StyledAppBar = styled(AppBar, {
  backgroundColor: '#03396c',
  position:"fixed",
  

  
})

export const StyledToolbar = styled(Toolbar, {
  height: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '240px',
  color: '#FFF',

  '@mobile': {
    marginLeft: '0px',
    flexWrap: 'wrap'
  },
  '@tablet': {
    marginLeft: '240px',
    flexWrap: 'wrap'
  }

 


})

export const StyledIconButton = styled(IconButton, {
  outline: 'none',
  color:'inherit' ,
  edge:'start' 

  
})

export const StyledButton = styled(Button, {
  color:'inherit'
  
})


export const StyledLinkButton = styled(Button, {
  color:'inherit',

  '&:hover': {
    color: 'white !important',
    textDecoration: 'none'
  }
  
})

export const StyledAvatar = styled(Avatar, {
  width: '30px',
  height: '30px'
})


export const StyledToggleIconButton = styled(IconButton, {
  marginLeft: '1rem'
  
})

export const StyledMenu = styled(Menu, {
  
  '@tablet': {
    display: 'none'
  }
    
  
})


export const StyledDrawer = styled(Drawer, {
  width: '240px',  
  
})

export const StyledDrawerContainer = styled('nav', {
 
  '@tablet': {
    width: '240px',
    flexShrink: 0,
    
    
  },
  



})

