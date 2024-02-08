import * as React from "react";
import { Typography, Avatar, Button, Toolbar, Box, AppBar, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";



const CustomAppBar = styled(AppBar)({
  background: "#B4D9B6",
});

const CustomButton = styled(Button)({
  marginLeft: "10px",
  color: "black",
});

const CustomLogoImg = styled("img")({
  height: "70px", // Adjust the height of the logo as needed
  marginRight: "10px", // Add spacing between the logo and buttons
});

const Navbar = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/")
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar position="static">
        <Toolbar>
          <CustomLogoImg src="/gathergrologo.png" alt="Custom Logo" onClick={() => {
            navigate("/");
          }} />
          <Typography
            variant="h5"
            noWrap
            component="h1"
            fontWeight={600}
            color="black"
          >
            GatherGro
          </Typography>
          <Box sx={{ flexGrow: 1 }} />{" "}
          {/* Empty box to push buttons to the right */}
          {!token && (
            <>
              <CustomButton color="inherit" href="/login">
                Login
              </CustomButton>
              <CustomButton href="/register">Register</CustomButton>
            </>
          )}
          {token && (
            <>
              <Tooltip title="Profile">
                <Avatar alt="Remy Sharp" src="/gathergrologo.png" />
              </Tooltip>
              <CustomButton color="inherit" onClick={handleLogout}>
                Logout
              </CustomButton>
            </>
          )}
        </Toolbar>
      </CustomAppBar>
    </Box>
  );
};

export default Navbar;
