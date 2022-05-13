import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import MaterialUISwitch from './styledSwitch';
import { ThemeProvider } from '@mui/material/styles';
import AttractionsTwoToneIcon from '@mui/icons-material/AttractionsTwoTone';
import navBarColor from './colors';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <ThemeProvider theme={navBarColor} >
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <AttractionsTwoToneIcon color="red" sx={{ display: { md: 'flex' }, mr: 1 }} fontSize="large"/>
                    <Typography textAlign="left" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        The Image Gallery
                    </Typography>
                    <FormGroup>
                        <FormControlLabel
                            control={<MaterialUISwitch sx={{ m: 1 }} />}
                            label="Dark/Light"
                        />
                    </FormGroup>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
        <Toolbar/>
    </Box>
  );
}