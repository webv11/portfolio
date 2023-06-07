import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LocalFloristRoundedIcon from '@mui/icons-material/LocalFloristRounded';
import { Tab } from '@mui/material';

const Navbar = () => {
  
  return (
    <AppBar position="static" sx={ {background : "black"} }>
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <LocalFloristRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

           <Box sx={{ display: { marginLeft : "auto"} }} >

            <Typography>
            <Tab label="Home"></Tab>    
            <Tab label="Skills"></Tab>
            <Tab label="SErvices"></Tab>
            <Tab label="Timeline"></Tab>
            <Tab label="Contact"></Tab>
            </Typography>         


           </Box>
 
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;