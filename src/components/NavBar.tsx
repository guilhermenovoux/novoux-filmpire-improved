import React from 'react'
import { StyledAppBar, StyledAvatar, StyledButton, StyledIconButton, StyledLinkButton, StyledMenu, StyledToggleIconButton, StyledToolbar } from '../styles/components/NavBar'
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material'
import Link from 'next/link'
import { darkTheme } from '../styles/global'

import { useMediaQuery } from '@mui/material'
import { theme } from '../styles'
import { useTheme } from 'next-themes'


export default function NavBar(){
  const {theme, setTheme } = useTheme();
  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");
  const isMobile =  useMediaQuery('(max-width:600px')
  const isAuthenticated = true
  return(
    <>
      <StyledAppBar position="fixed">
        <StyledToolbar >
          {isMobile && (
            <StyledIconButton 
            color='inherit' 
            edge='start' 
            onClick={() => {}}>
              <StyledMenu />
            </StyledIconButton>
          )}
          <StyledToggleIconButton
          onClick={toggleTheme}
          >
            
            
            {theme === 'dark' ? <Brightness7 /> : <Brightness4 /> }


          </StyledToggleIconButton>
          {!isMobile && 'Search...'}
          <div>
            {!isAuthenticated ? (
              <StyledButton color='inherit' onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </StyledButton>
            ) : (
              <StyledLinkButton
                color='inherit'
                
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}
                <StyledAvatar alt="Profile" src='https://github.com/guilhermenovoux.png' />
                <Link href={`/profile/:id`}></Link>
              </StyledLinkButton>
            
            )}
          </div>
          {isMobile && 'Search...'}


        </StyledToolbar>

      </StyledAppBar>

    </>
  )
}