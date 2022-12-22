import { Divider, List, ListItem, ListItemText, ListSubheader, ListItemIcon, Box, CircularProgress } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { styled, theme} from '..'
import { ThemeProvider, useTheme } from 'next-themes'
import { InvertColors } from '@mui/icons-material'

export const StyledImageLink= styled(Link, {
  display: 'flex',
  justifyContent: 'center',
  padding: '10% 0'

})


export const StyledImage = styled(Image, {
width: '70%'
})

export const StyledDivider = styled(Divider, {

})

export const StyledListSubheader = styled(ListSubheader, {

})

export const StyledList = styled(List, {

})

export const StyledLink = styled(Link, {
  color: theme.colors.text,
  textDecoration: 'none'
  
})

export const StyledListItem = styled(ListItem, {
 display: 'flex'
})

export const StyledListItemIcon = styled(ListItemIcon, {

})

export const StyledGenreImage = styled(Image, {
  filter: theme === 'dark' ? 'dark' : 'invert(1)'
})

export const StyledListItemText = styled(ListItemText, {

})

