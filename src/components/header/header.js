import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import muiLink from '@mui/material/Link';

//page imports
import Gallery from "../writingPromptsGallery/Gallery"


import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"


//nav bar link options
const pages = [
  {text: "Home", linkTarget: "/"},
  {text: "Drawing Prompts", linkTarget: "Drawing"},
  {text: "Writing Prompts", linkTarget: "Writing"},
  {text: "Coding Prompts", linkTarget: "Coding"},
  {text: "Contact", linkTarget: "Contact"},

];

// App bar with responsive menu copied from MUI website and altered to spark app
function Header() {

    // hook allows the menu to be opened
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    //open navbar event
    const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);};

    //close navbar event
    const handleCloseNavMenu = () => {
    setAnchorElNav(null);};

    return (
    
    // container
    <AppBar position="static" sx={{bgcolor: 'text.primary' }}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>



                {/* box to hold hamburger menu */}
                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    
                    {/* hamburger menu icon */}
                    <LightbulbOutlinedIcon sx={{ fontSize: 60 }}/>

                    </IconButton>

                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                    display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {pages.map((page) => (
                 <MenuItem key={page.text} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.text}</Typography>
                </MenuItem>
                
              ))}
                    </Menu>
                </Box>
            
                <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'Delicious Handrawn',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Spark
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>

            {pages.map((page) => (
              
               <Button

                href = {page.linkTarget}
                key={page.text}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              {page.text}

              </Button>
      


            ))}
          </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;