import React, { useState } from 'react'
import { StyledAppBar, StyledAvatar, StyledButton, StyledDrawer, StyledDrawerContainer, StyledIconButton, StyledLinkButton, StyledMenu, StyledToggleIconButton, StyledToolbar } from '../styles/components/NavBar'
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material'
import Link from 'next/link'

import { useMediaQuery } from '@mui/material'
import { theme } from '../styles'
import { useTheme } from 'next-themes'
import Sidebar from './Sidebar'


export default function NavBar(){
  const [mobileOpen, setMobileOpen] = useState(false);

  const {theme, setTheme } = useTheme();
  const toggleTheme = () =>
    setTheme(theme === "light" ? "dark" : "light");
  const isMobile =  useMediaQuery('(max-width:600px')
  const isAuthenticated = true

  return(
    <>

    {/* APPBAR SECTION */}


      <StyledAppBar >

        <StyledToolbar  >
          {isMobile && (
            <StyledIconButton 
            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            >
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
              <StyledButton onClick={() => {}}>
                Login &nbsp; <AccountCircle />
              </StyledButton>
            ) : (
              <StyledLinkButton
                onClick={() => {}}
              >
                {!isMobile && <>My Movies &nbsp;</>}

                <Link href={'/profile/:id'}>
                <StyledAvatar alt="Profile" src='https://github.com/guilhermenovoux.png' />
                </Link>
              </StyledLinkButton>
            
            )}
          </div>
          {isMobile && 'Search...'}
        </StyledToolbar>
      </StyledAppBar>


      {/* DRAWER SECTION */}


      <div>
        <StyledDrawerContainer>
          {isMobile ? (
            <StyledDrawer 
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
            css={{width: '240px'}}
            
            ModalProps={{keepMounted: true}}
            >
              <Sidebar setMobileOpen={setMobileOpen}/>
            </StyledDrawer>
          ) : (
            <StyledDrawer css={{width: '240px'}}
            variant="permanent"
            open
            >
              <Sidebar setMobileOpen={setMobileOpen}/>
            </StyledDrawer>
          
          )}
        </StyledDrawerContainer>
      </div>

    </>
  )
}