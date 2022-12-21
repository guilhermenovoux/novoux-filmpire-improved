import { styled, theme } from "..";
import { css } from "@stitches/core";
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar  } from '@mui/material'
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material'

export const StyledAppBar = styled(AppBar, {
  backgroundColor: '#03396c',
  
  
})

export const StyledToolbar = styled(Toolbar, {
  height: '6rem',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: '240px',
  color: '#FFF',

  '@mobile': {
    marginLeft: 0,
    flexWrap: 'wrap'
  }
})

export const StyledIconButton = styled(IconButton, {
  outline: 'none',

  
})

export const StyledButton = styled(Button, {

  
})


export const StyledLinkButton = styled(Button, {

  
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



