import Image from 'next/image'
import Link from 'next/link'
import { StyledImageLink, StyledImage, StyledDivider, StyledList, StyledLink, StyledListItem, StyledListItemIcon, StyledGenreImage, StyledListItemText } from '../styles/components/Sidebar';
import { useTheme } from "next-themes";
import { ListSubheader } from '@mui/material';


const categories = [
  { label: 'Popular', value: 'popular'},
  { label: 'Top rated', value: 'top_rated'},
  { label: 'Upcoming', value: 'upcoming'}
]

const demoCategories = [
  { label: 'Comedy', value: 'comedy'},
  { label: 'Action', value: 'action'},
  { label: 'Horror', value: 'horror'},
  { label: 'Animation', value: 'animation'},

]


interface Sidebar {
  setMobileOpen: boolean
}

export default function Sidebar({setMobileOpen}: Sidebar){
  const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
  const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

  const { theme, setTheme } = useTheme();

  return (
    <>
    {/* LOGO */}
    <StyledImageLink href={'/'}>
      <StyledImage width={600} height={60} src={theme === 'light' ? redLogo : blueLogo} alt="Filmpire Logo" />
    </StyledImageLink>

    {/* CATEGORIES LIST */}
    <StyledDivider />
    <StyledList>
      <ListSubheader>Categories</ListSubheader>
        {categories.map(({label, value}) => (
          <StyledLink key={value} href={'/'} >
            <StyledListItem  onClick={() => {}}>
              {/* <StyledListItemIcon>
                <StyledGenreImage width={30} height={60} src={redLogo} />
              </StyledListItemIcon> */}
              <StyledListItemText primary={label}/>
            </StyledListItem>
          </StyledLink>
        ))}
      
    </StyledList>

    <StyledDivider />

    {/* GENRES LIST */}

    <StyledList>
      <ListSubheader>Genres</ListSubheader>

        {demoCategories.map(({label, value}) => (
          <StyledLink key={value} href={'/'} >
            <StyledListItem  onClick={() => {}}>
              {/* <StyledListItemIcon>
                <StyledGenreImage width={30} height={60} src={redLogo} />
              </StyledListItemIcon> */}
              <StyledListItemText primary={label}/>
            </StyledListItem>
          </StyledLink>
        ))}
    </StyledList>


    </>
  )
}