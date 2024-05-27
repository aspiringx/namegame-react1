"use client";

import Image from "next/image";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Album } from "./components/Album/Album";
import logo from '../public/hilltop_logo.jpeg';
import { Alert, Button, IconButton, Menu, MenuItem } from "@mui/material";
import { Check as CheckIcon,  Info as InfoIcon, MoreVert as MoreVertIcon } from "@mui/icons-material";
import React from "react";

export default function Home() {
  const queryClient = new QueryClient()

  const [mainMenuEl, setMainMenuEl] = React.useState<null | HTMLElement>(null);
  const mainMenuOpen = Boolean(mainMenuEl);
  const handleMainMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMainMenuEl(event.currentTarget);
  };
  const handleMainMenuClose = () => {
    setMainMenuEl(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div id="__next" className="page">
        <header className="flex justify-between items-center">
          <Image className="logo" 
            src={logo} 
            priority={true}
            style={{
              width: '150px',
              height: 'auto'
            }}
            alt="Hilltop United Methodist Church" 
            width={200} 
            height={150} 
          />
          <div className="text-gray-500">
            <IconButton aria-label="menu" onClick={handleMainMenuClick}>
              <MoreVertIcon fontSize="large" />
            </IconButton>
            <Menu
              id="main-menu"
              anchorEl={mainMenuEl}
              open={mainMenuOpen}
              onClose={handleMainMenuClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleMainMenuClose}>Me</MenuItem>
              <MenuItem onClick={handleMainMenuClose}>About Hilltop</MenuItem>
              <MenuItem onClick={handleMainMenuClose}>Memorize Faces and Names</MenuItem>
            </Menu>
          </div>
        </header>
        <div className="info mb-2">
          <Alert sx={{ borderRadius: 0}} icon={<CheckIcon fontSize="inherit" />} severity="success">
            Congrats, you just met <b>Mindy</b>! 
          </Alert>
          <Alert sx={{ borderRadius: 0}} icon={<InfoIcon fontSize="inherit" />} severity="info">
            You&apos;re in <b>anonymous guest mode</b>. To participate and let
            others remember you, <a href="#">click here</a>.
          </Alert>
        </div>
        <Album />
        <footer className="flex justify-evenly items-center">
          <Button variant="contained" size="medium">Meet</Button>
          <Button variant="contained" size="medium">Share</Button>
        </footer>
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

        // <div /* Register Form */ className="registerForm">
        //   Register Form
        //   <div /* Name Input */ className="nameInput">Name</div>
        //   <div /* Phone Input */ className="phoneInput">Phone</div>
        //   <div /* Picture Input */ className="pictureInput">Picture</div>
        //   <button /* Submit */ className="submitButton">Submit</button>
        // </div>