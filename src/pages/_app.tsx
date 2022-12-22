import type { AppProps } from 'next/app'
import { gloabalStyles } from '../styles/global'
import {  ContentContainer, StyledToolbarApp } from '../styles/pages/app';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import { ThemeProvider } from 'next-themes';
import { darkTheme, lightTheme } from '../styles';


gloabalStyles();


export default function App({ Component, pageProps }: AppProps) {
  
  return ( 
    <ThemeProvider attribute='class' defaultTheme='system' value={{light: 'light', dark: darkTheme.className}} >

      
    <NavBar/>
      <ContentContainer>
        <StyledToolbarApp />



  
  
  
  
      <Component {...pageProps} /> 
    </ContentContainer>

    </ThemeProvider>

  
  
  )
}
