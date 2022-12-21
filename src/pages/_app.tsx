import type { AppProps } from 'next/app'
import { gloabalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app';
import Image from 'next/image';
import NavBar from '../components/NavBar';

gloabalStyles();


export default function App({ Component, pageProps }: AppProps) {
  
  return ( 

    <Container>
      <Header>
        <NavBar/>
      </Header>


  
  
  
  
      <Component {...pageProps} /> 
    </Container>

  
  
  )
}
