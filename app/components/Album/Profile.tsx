"use client";

import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import React from "react";

interface Props {
  id: number,
  first: string,
  last: string,
  path: string,
}

export function Profile({ id, first, last, path }: Props) {
  const [menuEl, setMenuEl] = React.useState<null | HTMLElement>(null);
  const [more, setMore] = React.useState("hidden");

  const menuOpen = Boolean(menuEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuEl(null);
  };

  const toggleMore = () => {
    if (more == "hidden") {
      setMore("");
    } else {
      setMore("hidden");
    }
  };

  return (
    <div className="profile flex flex-col">
      <div className="name flex justify-between items-center px-2">
        <div className="ml-2">
          {first + ' ' + last}
        </div>
        <div className="text-gray-500">
          <IconButton aria-label="menu" onClick={toggleMore}>
            {more == 'hidden' ? (
            <ExpandMoreIcon fontSize="medium" />
            ) : (
            <ExpandLessIcon fontSize="medium" />
            )}
          </IconButton>
        </div>
      </div>
      {more == '' ? (
        <div className="more p-4">
          Here&apos;s some more info about {first}.
          <br/><br/>
          {first} has been in this group since 2021.
        </div>
      ) : (null) }
      <Image 
        src={path}
        style={{
          width: '100%',
          height: 'auto'
        }}
        width={300}
        height={300}
        alt="User Name" 
      />
    </div>
  );
}


          // <Menu
          //   id={"user-menu" + id}
          //   anchorEl={menuEl}
          //   open={menuOpen}
          //   onClose={handleMenuClose}
          //   MenuListProps={{
          //     'aria-labelledby': 'basic-button',
          //   }}
          // >
          //   {/* Open dialogs for these actions. */}
          //   <MenuItem onClick={handleMenuClose}>Learn more</MenuItem>
          //   <MenuItem onClick={handleMenuClose}>Chat</MenuItem>
          // </Menu>