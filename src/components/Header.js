import React from 'react'

import './Header.css';
import { createTheme, TextField, ThemeProvider } from '@mui/material';

const Header = ({word,setword,lightMode}) => {
    const darkTheme = createTheme({
        palette: {
            primary:{
                main: lightMode? '#fff':'#000',
            },
          mode: lightMode? 'dark':'light',
        },
      });
  return (
    <div className='header'>
        <span className='title'>{word || "WORD HUNT "}</span>
        <div className='inputs'>
        <ThemeProvider theme={darkTheme}> 
        <TextField 
        className='search'
        value={word}
        onChange={(e) => setword(e.target.value)}
       label="Search word" variant="standard" />
        
        </ThemeProvider>

        

        </div>
    </div>
  )
}

export default Header