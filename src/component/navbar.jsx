import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../assets/logoo.jpg";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div>
            <Box sx={{ width: "100%" }}>
                <AppBar
                    position="static"
                    sx={{ 
                        backgroundColor: "#ffffff",
                        boxShadow: '1px 1px 20px 36px #ffffff' }}>

                    <Toolbar variant="dense" sx={{ 
                        justifyContent: 'center',
                        boxShadow: '1px 1px 20px 36px #ffffff',
                        zIndex: '99' }}>

                    <a href="/home">
                        <img src={Logo} alt="logo" style={{
                            width: '50px',
                            margin: '0px 15px 0px' }} />
                    </a>

                    <Typography
                        variant="h6"
                        color="inherit"
                        component="div"
                        sx={{ 
                            color: "#000000", 
                            fontSize: '40px', 
                            fontFamily: 'impact' }}>
                        PhotoReaction
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{ 
                            margin: "0px 15px 0px", 
                            backgroundColor: "#000000",  }}>
                    <Link to='/home' style={{
                        color: '#ffffff', 
                        textDecorationLine: 'none', 
                        fontSize: '16px',
                        fontWeight: '700'}} >Home</Link>
                    </Button>

                    <Button
                        variant="contained"
                        sx={{ 
                            marginRight: "15px", 
                            backgroundColor: "#000000" }}>
                    <Link to='/favorite' style={{
                        color: '#ffffff', 
                        textDecorationLine: 'none', 
                        fontSize: '16px', 
                        fontWeight: '700'}} >favorite photos</Link>
                    </Button>

                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}
