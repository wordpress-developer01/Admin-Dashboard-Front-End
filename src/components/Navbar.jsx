import React, { useState} from 'react';
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from '@mui/icons-material';
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from 'states';
import profileImage from "assets/avatar-15.svg";
import { AppBar, useTheme, Toolbar } from '@mui/material';

const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
  return (
    <AppBar
    sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
    }}
    >
        <Toolbar sx={{ justifyContent: "space-between"}}>

        </Toolbar>
    </AppBar>
  )
}

export default Navbar