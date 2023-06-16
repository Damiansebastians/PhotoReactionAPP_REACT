import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Logo from "../assets/logoo.jpg"

export default function Footer() {
    return (
        <Box sx={{ 
            width: '100%' }} >

            <AppBar position="static" sx={{ 
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ffffff',
                boxShadow: '1px 1px 20px 56px #ffffff' }} >

                    <p style={{
                        color: '#000000',
                        fontSize: '20px',
                        fontFamily: "Impact, 'Arial Narrow Bold', 'sans-serif'" }}
                        >Design & Develop // Damian Silvera</p>

                    <img src={Logo} alt="logo" style={{ 
                        width: '50px',
                        margin: '0px 15px 15px'}} />

                    <p style={{
                        color: '#000000',
                        fontSize: '20px',
                        fontFamily: "Impact, 'Arial Narrow Bold', 'sans-serif'" }}
                        >© 2023 PHOTOREACTION</p>
            </AppBar>
        </Box>
    );
}