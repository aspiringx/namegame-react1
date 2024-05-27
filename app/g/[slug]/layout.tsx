"use client"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import '../../globals.css'
import logo from '../../../public/hilltop_logo.jpeg';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from "@mui/material";
import React from 'react';
import { QueryClient } from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Hilltop United Methodist Church',
//   description: 'Relationships are everything!',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

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
    <html lang="en">
      <body id="__next" className={inter.className}>
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
              <MenuItem onClick={handleMainMenuClose}>Play NameGame</MenuItem>
            </Menu>
          </div>
        </header>
        
        {children}
      </body>
    </html>
  )
}
