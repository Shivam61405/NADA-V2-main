import { Typography, Box, IconButton,  Avatar } from "@mui/material";
import React from "react";
import { Notifications, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Header = ({ title, subtitle }) => {
  return (
    <Box alignItems="center" display="flex" justifyContent="space-between" mb={4} bgcolor="white" p={2}>
      <Box>
        <Typography color="secondary" fontWeight="bold" mb={1} variant="h2">
          {title}
        </Typography>
        
      </Box>
      <Box alignItems="center" display="flex">
        <Box
          alignItems="center"
          bgcolor="#D3D3D31"
          borderRadius="8px"
          display="flex"
          mr={2}
          p={1}
          sx={{ border: '2px solid royalblue' }}
        >
           {/* <Search />
          <InputBase ml={1} placeholder="Search for something" /> */}
        </Box> 
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton component={Link} to="/settings">
          <Settings />
        </IconButton>
        <Avatar alt="User profile" ml={1} src="Bheem.jpg" />
      </Box>
    </Box>
  );
};

export default Header;