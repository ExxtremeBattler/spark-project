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
  {text: 'Home', linkTarget: "/"},
  {text: 'Writing', linkTarget: "Writing"},
  {text: 'Coding', linkTarget: "Coding"}
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

                {/* little icon when navbar is fully extended */}
                <LightbulbOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,  }} />

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
                <Link to="Coding"> <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
                </Link>
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
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SPARK
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>

            {pages.map((page) => (
              

               <Button
                href = {page.linkTarget}
                key={page.text}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>

      


            ))}
          </Box>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;